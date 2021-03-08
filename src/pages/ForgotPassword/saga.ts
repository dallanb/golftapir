import { all, put, takeLatest } from 'redux-saga/effects';
import ForgotPasswordPageActions, { ForgotPasswordPageTypes } from './actions';

function* init() {
    try {
        yield put(
            ForgotPasswordPageActions.setFormInitialValues({ email: undefined })
        );
        yield put(ForgotPasswordPageActions.initSuccess());
    } catch (err) {
        yield put(ForgotPasswordPageActions.initFailure(err.toJSON()));
    }
}

export default function* ForgotPasswordPageSaga() {
    yield all([takeLatest(ForgotPasswordPageTypes.INIT, init)]);
}
