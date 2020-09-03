import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import AuthActions, { AuthTypes } from '../reducers/AuthReducer';
import { ClientProxy, AuthService } from '../services';

function* ping() {
    yield call(AuthService.ping);
}

function* login({ email, password }: AnyAction) {
    try {
        const res = yield call(AuthService.login, { email, password });
        const { user, access_token } = res;
        ClientProxy.accessToken = access_token;
        yield put(AuthActions.loginSuccess(user));
        message.success('Login successful!');
    } catch (err) {
        yield put(AuthActions.loginFailure(err));
        message.error('Login unsuccessful');
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
        message.success('Register successful!');
    } catch (err) {
        yield put(AuthActions.registerFailure(err));
        message.error('Register unsuccessful');
    }
}

function* refresh() {
    try {
        const res = yield call(AuthService.refresh);
        const { access_token } = res;
        ClientProxy.accessToken = access_token;
        yield put(AuthActions.refreshSuccess());
    } catch (err) {
        yield put(AuthActions.refreshFailure(err));
        message.error('Session expired');
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
