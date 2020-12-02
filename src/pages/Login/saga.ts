import { all, put, takeLatest } from 'redux-saga/effects';
import LoginPageActions, { LoginPageTypes } from './actions';

function* init() {
    try {
        yield put(LoginPageActions.initSuccess());
    } catch (err) {
        yield put(LoginPageActions.initFailure(err));
    }
}

export default function* LoginPageSaga() {
    yield all([takeLatest(LoginPageTypes.INIT, init)]);
}
