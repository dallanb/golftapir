import {
    all,
    call,
    delay,
    fork,
    put,
    race,
    take,
    takeLatest,
} from 'redux-saga/effects';
import MemberAppActions, { MemberAppTypes } from './actions';
import {
    AuthActions,
    AuthTypes,
    NotificationActions,
    NotificationTypes,
    SocketActions,
} from '@actions';
import { FirebaseClient } from '@libs';
import { socketEventHandlers } from '@apps/MemberApp/utils';
import { ClientProxy } from '@services';
import { fetchMyLeagues, fetchMyMemberUser } from '@helpers';
import { AccountPageContentAccountTypes } from '@pages/Account/AccountContent/Account/actions';

// Action Handlers
function* init() {
    try {
        if (!ClientProxy.accessToken) yield call(refreshAuth);

        const { data: me } = yield call(fetchMyMemberUser, {
            include: 'avatar,stat',
        });

        // see if i can make a 'me' api call for the socket api
        yield put(
            SocketActions.init(me.user_uuid, {
                eventHandler: socketEventHandlers,
            })
        );

        yield fork(fetchMyLeagues, {
            page: 1,
            per_page: 100,
            include: 'avatar',
        });

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
        yield call(fetchMyMemberUser, {
            include: 'avatar,stat',
        });
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

function* accountSubmit() {
    yield put(MemberAppActions.refresh());
}

export function* BaseSaga() {
    yield all([
        takeLatest(
            AccountPageContentAccountTypes.SUBMIT_SUCCESS,
            accountSubmit
        ),
    ]);
}
