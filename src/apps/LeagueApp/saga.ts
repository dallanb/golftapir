import {
    all,
    call,
    delay,
    put,
    race,
    fork,
    take,
    takeLatest,
} from 'redux-saga/effects';
import { AnyAction } from 'redux';
import LeagueAppActions, { LeagueAppTypes } from './actions';
import {
    AuthActions,
    AuthTypes,
    LeagueActions,
    LeagueTypes,
    NotificationActions,
    NotificationTypes,
    SocketActions,
} from '@actions';
import { FirebaseClient } from '@libs';
import { socketEventHandlers } from '@apps/LeagueApp/utils';
import { ClientProxy } from '@services';
import { fetchMyAccount, fetchMyLeagues } from './helpers';

// Action Handlers
function* preInit({ data: league }: AnyAction) {
    yield put(LeagueAppActions.set({ league }));
}

function* init({ uuid }: AnyAction) {
    try {
        if (!ClientProxy.accessToken) yield call(refreshAuth);

        const me = yield call(fetchMyAccount);

        yield put(
            SocketActions.init(me.membership_uuid, {
                eventHandler: socketEventHandlers,
            })
        );

        const { data: league } = yield call(fetchLeague, uuid);
        yield put(LeagueAppActions.set({ league }));

        yield fork(fetchMyLeagues);

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

        yield put(LeagueAppActions.initSuccess());
    } catch (err) {
        yield put(LeagueAppActions.initFailure(err));
    }
}

function* refresh({ uuid }: AnyAction) {
    try {
        const { data: league } = yield call(fetchLeague, uuid);
        yield put(LeagueAppActions.set({ league }));
        yield put(LeagueAppActions.refreshSuccess());
    } catch (err) {
        yield put(LeagueAppActions.refreshFailure(err));
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

export default function* LeagueAppSaga() {
    yield all([
        takeLatest(LeagueAppTypes.PRE_INIT, preInit),
        takeLatest(LeagueAppTypes.INIT, init),
        takeLatest(LeagueAppTypes.REFRESH, refresh),
        takeLatest(LeagueAppTypes.TERMINATE, terminate),
    ]);
}
