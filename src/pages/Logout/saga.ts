import { all, put, takeLatest } from 'redux-saga/effects';
import LogoutPageActions, { LogoutPageTypes } from './actions';
import { AuthActions } from '@actions';

function* init() {
    try {
        yield put(AuthActions.logout());
        yield put(LogoutPageActions.initSuccess());
    } catch (err) {
        yield put(LogoutPageActions.initFailure(err));
    }
}

export default function* LoginPageSaga() {
    yield all([takeLatest(LogoutPageTypes.INIT, init)]);
}
