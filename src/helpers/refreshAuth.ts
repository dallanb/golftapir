import { delay, put, race, take } from 'redux-saga/effects';
import { AuthActions, AuthTypes } from '@actions';

function* refreshAuth() {
    yield put(AuthActions.refresh());
    const { failure, timeout } = yield race({
        success: take(AuthTypes.REFRESH_SUCCESS),
        failure: take(AuthTypes.REFRESH_FAILURE),
        timeout: delay(5000),
    });
    if (timeout) {
        throw new Error(timeout);
    }
    if (failure) {
        throw new Error(failure);
    }
}

export default refreshAuth;
