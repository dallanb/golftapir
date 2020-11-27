import { all, put, takeLatest } from 'redux-saga/effects';
import ContestsPageActions, { ContestsPageTypes } from './actions';

function* init() {
    try {
        yield put(ContestsPageActions.initSuccess());
    } catch (err) {
        yield put(ContestsPageActions.initFailure(err));
    }
}

export default function* ContestsPageSaga() {
    yield all([takeLatest(ContestsPageTypes.INIT, init)]);
}
