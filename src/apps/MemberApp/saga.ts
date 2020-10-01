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
import BaseActions, { BaseTypes } from './actions';
import {
    AccountActions,
    AccountTypes,
    AuthActions,
    AuthTypes,
    NotificationActions,
    NotificationTypes,
} from '@actions';
import { selectIsLoggedIn } from '@selectors/AuthSelectors';
import { FirebaseClient } from '@libs';

// Action Handlers
function* init() {
    try {
        const isLoggedIn = yield select(selectIsLoggedIn);
        if (!isLoggedIn) yield call(refresh);

        const { data: me } = yield call(fetchAccount);
        yield put(BaseActions.set({ me }));

        // prepare notifications
        const token = yield call(requestToken);

        yield put(NotificationActions.setToken(me.membership_uuid, token));
        const { success, failure } = yield race({
            success: take(NotificationTypes.SET_TOKEN_SUCCESS),
            failure: take(NotificationTypes.SET_TOKEN_FAILURE),
        });

        if (failure) {
            throw new Error('Unable to set token');
        }

        yield put(BaseActions.initSuccess());
    } catch (err) {
        yield put(BaseActions.initFailure(err));
    }
}

// Helpers
function* refresh() {
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

function* requestToken() {
    const token = yield FirebaseClient.requestNotificationPermissions();
    console.log(token);
    return token;
}

export default function* BaseSaga() {
    yield all([takeLatest(BaseTypes.INIT, init)]);
}
