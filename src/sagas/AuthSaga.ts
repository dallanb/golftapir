import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import AuthActions, { AuthTypes } from '../reducers/AuthReducer';
import { AuthService } from '../services';

function* login({ email, password }: AnyAction) {
    try {
        const res = yield call(AuthService.login, { email, password });
        console.log(res);
        yield put(AuthActions.loginSuccess());
        message.success('Login successful!');
    } catch (err) {
        yield put(AuthActions.loginFailure(err));
        message.error('Login unsuccessful');
    }
}

export default function* UserSaga() {
    yield all([takeLatest(AuthTypes.LOGIN, login)]);
}
