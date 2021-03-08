import { AnyAction } from 'redux';
import { all, put, select, takeLatest } from 'redux-saga/effects';
import ContestsPageActions, { ContestsPageTypes } from './actions';

function* init() {
    try {
        yield put(ContestsPageActions.initSuccess());
    } catch (err) {
        yield put(ContestsPageActions.initFailure(err.toJSON()));
    }
}

export default function* ContestsPageSaga() {
    yield all([takeLatest(ContestsPageTypes.INIT, init)]);
}
