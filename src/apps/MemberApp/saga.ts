import {
    all,
    call,
    delay,
    put,
    race,
    take,
    takeLatest,
} from 'redux-saga/effects';
import { AnyAction } from 'redux';
import MemberAppActions, { MemberAppTypes } from './actions';
import {
    AuthActions,
    AuthTypes,
    BaseActions,
    BaseTypes,
    NotificationActions,
    NotificationTypes,
    SocketActions,
} from '@actions';
import { FirebaseClient } from '@libs';
import { socketEventHandlers } from '@apps/MemberApp/utils';
import { ClientProxy, LeagueService, MemberService } from '@services';

// Action Handlers
function* init() {
    try {
        if (!ClientProxy.accessToken) yield call(refreshAuth);
        yield put(BaseActions.initMe());
        yield put(BaseActions.initLeagues());
        yield put(BaseActions.initNotifications());

        yield put(MemberAppActions.initSuccess());
    } catch (err) {
        yield put(MemberAppActions.initFailure(err));
    }
}

function* terminate() {
    try {
        yield put(SocketActions.terminate());
    } catch (err) {
        console.error(err);
    }
}

function* refresh() {
    try {
        yield put(BaseActions.refreshMe());
        yield put(MemberAppActions.refreshSuccess());
    } catch (err) {
        yield put(MemberAppActions.refreshFailure());
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

function* requestToken() {
    const token = yield FirebaseClient.requestNotificationPermissions();
    return token;
}

export function* MemberAppSaga() {
    yield all([
        takeLatest(MemberAppTypes.INIT, init),
        takeLatest(MemberAppTypes.TERMINATE, terminate),
        takeLatest(MemberAppTypes.REFRESH, refresh),
    ]);
}

function* initMe() {
    try {
        const { members: me } = yield call(
            MemberService.fetchMemberUser,
            'me',
            {
                include: 'avatar,stat',
            }
        );
        // TODO: MAYBE HAVE THIS RESPOND TO FETCH ME SUCCESS INSTEAD?
        yield put(BaseActions.initSockets(me.user_uuid));
        yield put(BaseActions.fetchMeSuccess(me));
    } catch (err) {
        yield put(BaseActions.fetchMeFailure(err));
    }
}

function* initLeagues() {
    try {
        const { leagues } = yield call(
            LeagueService.fetchUserMemberLeagues,
            'me',
            {
                page: 1,
                per_page: 100,
                include: 'avatar',
            }
        );
        yield put(BaseActions.fetchLeaguesSuccess(leagues));
    } catch (err) {
        yield put(BaseActions.fetchLeaguesFailure(err));
    }
}

function* initSockets({ uuid }: AnyAction) {
    try {
        // see if i can make a 'me' api call for the socket api
        yield put(
            SocketActions.init(uuid, {
                eventHandler: socketEventHandlers,
            })
        );
        yield put(BaseActions.initSocketsSuccess());
    } catch (err) {
        yield put(BaseActions.initSocketsFailure(err));
    }
}

// TODO: NOTIFICATIONS SHOULD BECOME PART OF BASE
function* initNotifications() {
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
}

export function* BaseSaga() {
    yield all([
        takeLatest(BaseTypes.INIT_ME, initMe),
        takeLatest(BaseTypes.INIT_LEAGUES, initLeagues),
        takeLatest(BaseTypes.INIT_SOCKETS, initSockets),
        takeLatest(BaseTypes.INIT_NOTIFICATIONS, initNotifications),
    ]);
}
