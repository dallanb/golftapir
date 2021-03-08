import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import VerifyPageActions, { VerifyPageTypes } from './actions';
import { AuthActions } from '@actions';

function* init({ token }: AnyAction) {
    try {
        yield put(AuthActions.verify(token));
        yield put(VerifyPageActions.initSuccess());
    } catch (err) {
        yield put(VerifyPageActions.initFailure(err.toJSON()));
    }
}

export default function* VerifyPageSaga() {
    yield all([takeLatest(VerifyPageTypes.INIT, init)]);
}
