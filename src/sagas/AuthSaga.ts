import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import AuthActions, { AuthTypes } from '../reducers/AuthReducer';
import { ClientProxy, AuthService } from '../services';
import CONSTANTS from '../locale/en-CA';

function* ping() {
    yield call(AuthService.ping);
}

function* login({ email, password }: AnyAction) {
    try {
        const res = yield call(AuthService.login, { email, password });
        const { user, access_token } = res;
        ClientProxy.accessToken = access_token;
        yield put(AuthActions.loginSuccess(user));
        message.success(CONSTANTS.AUTH.SUCCESS.LOGIN);
    } catch (err) {
        yield put(AuthActions.loginFailure(err));
        message.error(CONSTANTS.AUTH.ERROR.LOGIN);
    }
}

function* register({ email, username, password }: AnyAction) {
    try {
        const res = yield call(AuthService.register, {
            email,
            username,
            password,
        });
        const { user, access_token } = res;
        ClientProxy.accessToken = access_token;
        yield put(AuthActions.registerSuccess(user));
        message.success(CONSTANTS.AUTH.SUCCESS.REGISTER);
    } catch (err) {
        yield put(AuthActions.registerFailure(err));
        message.error(CONSTANTS.AUTH.ERROR.REGISTER);
    }
}

function* refresh() {
    try {
        const res = yield call(AuthService.refresh);
        const { access_token, user } = res;
        ClientProxy.accessToken = access_token;
        yield put(AuthActions.refreshSuccess(user));
    } catch (err) {
        yield put(AuthActions.refreshFailure(err));
        message.error(CONSTANTS.AUTH.ERROR.SESSION);
    }
}

export default function* AuthSaga() {
    yield all([
        takeLatest(AuthTypes.PING, ping),
        takeLatest(AuthTypes.LOGIN, login),
        takeLatest(AuthTypes.REGISTER, register),
        takeLatest(AuthTypes.REFRESH, refresh),
    ]);
}
