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
    SocketActions,
} from '@actions';
import { selectData, selectIsLoggedIn } from '@selectors/AuthSelectors';
import { FirebaseClient } from '@libs';
import { socketEventHandlers } from '@apps/MemberApp/utils';

// Action Handlers
function* init() {
    try {
        const isLoggedIn = yield select(selectIsLoggedIn);
        if (!isLoggedIn) yield call(refresh);

        // I dont think i need to even pass auth Data cause the id can be grabbed from kong header
        const authData = yield select(selectData);
        yield put(
            SocketActions.init(authData, { eventHandler: socketEventHandlers })
        );

        const { data: me } = yield call(fetchAccount);
        yield put(BaseActions.set({ me }));

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
