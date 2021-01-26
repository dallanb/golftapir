import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import ResetPasswordPageActions, { ResetPasswordPageTypes } from './actions';
import { AuthActions } from '@actions';

function* init() {
    try {
        yield put(
            ResetPasswordPageActions.setFormInitialValues({
                password: undefined,
                confirm_password: undefined,
            })
        );
        yield put(ResetPasswordPageActions.initSuccess());
    } catch (err) {
        yield put(ResetPasswordPageActions.initFailure(err));
    }
}

export default function* ResetPasswordPageSaga() {
    yield all([takeLatest(ResetPasswordPageTypes.INIT, init)]);
}
