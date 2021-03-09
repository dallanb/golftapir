import { all, put, takeLatest } from 'redux-saga/effects';

import MembersCreatePageActions, { MembersCreatePageTypes } from './actions';

function* init() {
    try {
        yield put(MembersCreatePageActions.initSuccess());
    } catch (err) {
        yield put(MembersCreatePageActions.initFailure(err));
    }
}

export default function* MembersCreatePageSaga() {
    yield all([takeLatest(MembersCreatePageTypes.INIT, init)]);
}
