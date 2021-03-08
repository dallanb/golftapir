import { all, put, takeLatest } from 'redux-saga/effects';

import ContestsCreatePageActions, { ContestsCreatePageTypes } from './actions';

function* init() {
    try {
        yield put(ContestsCreatePageActions.initSuccess());
    } catch (err) {
        yield put(ContestsCreatePageActions.initFailure(err.toJSON()));
    }
}

export default function* ContestsCreatePageSaga() {
    yield all([takeLatest(ContestsCreatePageTypes.INIT, init)]);
}
