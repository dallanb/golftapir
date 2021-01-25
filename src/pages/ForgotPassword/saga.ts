import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import ForgotPasswordPageActions, { ForgotPasswordPageTypes } from './actions';
import { AuthActions } from '@actions';

function* init() {
    try {
        yield put(
            ForgotPasswordPageActions.setFormInitialValues({ email: undefined })
        );
        yield put(ForgotPasswordPageActions.initSuccess());
    } catch (err) {
        yield put(ForgotPasswordPageActions.initFailure(err));
    }
}

export default function* ForgotPasswordPageSaga() {
    yield all([takeLatest(ForgotPasswordPageTypes.INIT, init)]);
}
