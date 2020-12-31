import {
    all,
    call,
    delay,
    put,
    race,
    select,
    take,
    takeLatest,
} from 'redux-saga/effects';
import { AnyAction } from 'redux';
import BaseActions, { BaseTypes } from './actions';
import {
    AccountActions,
    AccountTypes,
    AuthActions,
    AuthTypes,
    LeagueActions,
    LeagueTypes,
    NotificationActions,
    NotificationTypes,
    SocketActions,
} from '@actions';
import { selectAuthData, selectIsLoggedIn } from '@selectors/AuthSelectors';
import { FirebaseClient } from '@libs';
import { socketEventHandlers } from '@apps/LeagueApp/utils';
import { ClientProxy } from '@services';

// Action Handlers
function* preInit({ data: league }: AnyAction) {
    yield put(BaseActions.set({ league }));
}

function* init({ uuid }: AnyAction) {
    try {
        if (!ClientProxy.accessToken) yield call(refreshAuth);

        // I dont think i need to even pass auth Data cause the id can be grabbed from kong CompetitorHeader
        const authData = yield select(selectAuthData);
        yield put(
            SocketActions.init(authData, { eventHandler: socketEventHandlers })
        );

        const { data: me } = yield call(fetchAccount);
        yield put(BaseActions.set({ me }));

        const { data: league } = yield call(fetchLeague, uuid);
        yield put(BaseActions.set({ league }));

        const { data: leagues } = yield call(fetchLeagues);
        yield put(BaseActions.set({ leagues }));

        // prepare notifications
        const token = yield call(requestToken);

        yield put(NotificationActions.setToken(token));
        const { success, failure } = yield race({
            success: take(NotificationTypes.SET_TOKEN_SUCCESS),
            failure: take(NotificationTypes.SET_TOKEN_FAILURE),
        });

        yield put(NotificationActions.fetchPending());

        if (failure) {
            throw new Error('Unable to set token');
        }

        yield put(BaseActions.initSuccess());
    } catch (err) {
        yield put(BaseActions.initFailure(err));
    }
}

function* refresh({ uuid }: AnyAction) {
    try {
        const { data: league } = yield call(fetchLeague, uuid);
        yield put(BaseActions.set({ league }));
        yield put(BaseActions.refreshSuccess());
    } catch (err) {
        yield put(BaseActions.refreshFailure(err));
    }
}

function* terminate() {
    try {
        yield put(SocketActions.terminate());
    } catch (err) {
        console.error(err);
    }
}

// Helpers
function* refreshAuth() {
    yield put(AuthActions.refresh());
    const { failure, timeout } = yield race({
        success: take(AuthTypes.REFRESH_SUCCESS),
        failure: take(AuthTypes.REFRESH_FAILURE),
        timeout: delay(5000),
    });
    if (timeout) {
        yield put(AuthActions.refreshFailure());
        throw new Error('refresh timeout');
    }
    if (failure) {
        yield put(AuthActions.refreshFailure());
        throw new Error('refresh failure');
    }
}

function* fetchAccount() {
    yield put(
        AccountActions.fetchAccount('me', {
            include: 'avatar',
        })
    );
    const { success, failure } = yield race({
        success: take(AccountTypes.FETCH_ACCOUNT_SUCCESS),
        failure: take(AccountTypes.FETCH_ACCOUNT_FAILURE),
    });

    if (failure) {
        throw new Error(failure);
    }

    return success;
}

function* fetchLeagues() {
    yield put(
        LeagueActions.fetchLeagues({
            per_page: 100,
            page: 1,
            include: 'avatar',
        })
    );
    const { success, failure } = yield race({
        success: take(LeagueTypes.FETCH_LEAGUES_SUCCESS),
        failure: take(LeagueTypes.FETCH_LEAGUES_FAILURE),
    });

    if (failure) {
        throw new Error(failure);
    }

    return success;
}

function* fetchLeague(uuid: string) {
    yield put(
        LeagueActions.fetchLeague(uuid, {
            include: 'avatar',
        })
    );
    const { success, failure } = yield race({
        success: take(LeagueTypes.FETCH_LEAGUE_SUCCESS),
        failure: take(LeagueTypes.FETCH_LEAGUE_FAILURE),
    });

    if (failure) {
        throw new Error(failure);
    }

    return success;
}

function* requestToken() {
    const token = yield FirebaseClient.requestNotificationPermissions();
    return token;
}

export default function* BaseSaga() {
    yield all([
        takeLatest(BaseTypes.PRE_INIT, preInit),
        takeLatest(BaseTypes.INIT, init),
        takeLatest(BaseTypes.REFRESH, refresh),
        takeLatest(BaseTypes.TERMINATE, terminate),
    ]);
}
