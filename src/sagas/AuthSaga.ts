import { AnyAction } from 'redux';
import {
    all,
    call,
    cancel,
    cancelled,
    fork,
    put,
    select,
    take,
    takeLatest,
} from 'redux-saga/effects';
import { authErrorMessage, message } from '@utils';
import AuthActions, { AuthTypes } from '@actions/AuthActions';
import { ClientProxy, AuthService } from '@services';
import CONSTANTS from '@locale/en-CA';
import { countdown } from '@utils';
import { selectData } from '@selectors/BaseSelector';

let tokenWatchTask: any;

function* ping() {
    yield call(AuthService.ping);
}

function* login({ email, password }: AnyAction) {
    try {
        yield tokenWatchTask && cancel(tokenWatchTask);
        const res: any = yield call(AuthService.login, { email, password });
        const { user, access_token, expiry } = res;
        ClientProxy.accessToken = access_token;
        tokenWatchTask = yield fork(tokenCheck, expiry);
        yield put(AuthActions.loginSuccess(user, expiry));
        message.success(CONSTANTS.AUTH.SUCCESS.LOGIN);
    } catch (err) {
        const {
            response: {
                data: { msg },
                status,
            },
        } = err;
        yield put(AuthActions.loginFailure(err));
        message.error(
            status === 401 ? authErrorMessage(msg) : CONSTANTS.AUTH.ERROR.LOGIN
        );
    }
}

function* register({
    email,
    username,
    password,
    display_name,
    country,
    token,
}: AnyAction) {
    try {
        const payload = Object.assign(
            {},
            {
                email,
                username,
                password,
                display_name,
                country,
            },
            token && { token }
        );
        const res: any = yield call(AuthService.register, payload);
        const { user } = res;
        yield put(AuthActions.registerSuccess(user));
        message.success(CONSTANTS.AUTH.SUCCESS.REGISTER);
    } catch (err) {
        yield put(AuthActions.registerFailure(err));
        message.error(CONSTANTS.AUTH.ERROR.REGISTER);
    }
}

function* verify({ token }: AnyAction) {
    try {
        yield call(AuthService.verify, { token });
        yield put(AuthActions.verifySuccess());
        message.success(CONSTANTS.AUTH.SUCCESS.VERIFY);
    } catch (err) {
        yield put(AuthActions.verifyFailure(err));
        message.error(CONSTANTS.AUTH.ERROR.VERIFY);
    }
}

function* refresh() {
    try {
        yield tokenWatchTask && cancel(tokenWatchTask);
        const res: any = yield call(AuthService.refresh);
        const { access_token, user, expiry } = res;
        ClientProxy.accessToken = access_token;
        tokenWatchTask = yield fork(tokenCheck, expiry);
        yield put(AuthActions.refreshSuccess(user, expiry));
    } catch (err) {
        yield put(AuthActions.refreshFailure(err.toJSON ? err : err));
        message.error(CONSTANTS.AUTH.ERROR.SESSION);
    }
}

function* logout() {
    try {
        yield tokenWatchTask && cancel(tokenWatchTask);
        const res: any = yield call(AuthService.logout);
        ClientProxy.accessToken = null;
        yield put(AuthActions.logoutSuccess());
        message.success(CONSTANTS.AUTH.SUCCESS.LOGOUT);
    } catch (err) {
        yield put(AuthActions.logoutFailure(err));
        message.error(CONSTANTS.AUTH.ERROR.LOGOUT);
    }
}

function* forgotPassword({ email }: AnyAction) {
    try {
        yield call(AuthService.forgotPassword, { email });
        yield put(AuthActions.forgotPasswordSuccess());
        message.success(CONSTANTS.AUTH.SUCCESS.FORGOT_PASSWORD);
    } catch (err) {
        yield put(AuthActions.forgotPasswordFailure(err.toJSON()));
        message.error(CONSTANTS.AUTH.ERROR.FORGOT_PASSWORD);
    }
}

function* resetPassword({ password, token }: AnyAction) {
    try {
        yield call(AuthService.resetPassword, { password, token });
        yield put(AuthActions.resetPasswordSuccess());
        message.success(CONSTANTS.AUTH.SUCCESS.RESET_PASSWORD);
    } catch (err) {
        yield put(AuthActions.resetPasswordFailure(err.toJSON()));
        message.error(CONSTANTS.AUTH.ERROR.RESET_PASSWORD);
    }
}

export function* tokenCheck(expiry: number) {
    const chan: any = yield call(countdown, expiry);
    try {
        while (true) {
            let seconds = yield take(chan);
            if (seconds <= expiry / 2) yield put(AuthActions.refresh());
        }
    } finally {
        if (yield cancelled()) {
            chan.close();
        }
    }
}

export default function* AuthSaga() {
    yield all([
        takeLatest(AuthTypes.PING, ping),
        takeLatest(AuthTypes.LOGIN, login),
        takeLatest(AuthTypes.REGISTER, register),
        takeLatest(AuthTypes.VERIFY, verify),
        takeLatest(AuthTypes.REFRESH, refresh),
        takeLatest(AuthTypes.LOGOUT, logout),
        takeLatest(AuthTypes.FORGOT_PASSWORD, forgotPassword),
        takeLatest(AuthTypes.RESET_PASSWORD, resetPassword),
    ]);
}
