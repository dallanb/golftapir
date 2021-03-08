import { all, put, takeLatest } from 'redux-saga/effects';

import LeaguesCreatePageActions, { LeaguesCreatePageTypes } from './actions';

function* init() {
    try {
        yield put(LeaguesCreatePageActions.initSuccess());
    } catch (err) {
        yield put(LeaguesCreatePageActions.initFailure(err.toJSON()));
    }
}

export default function* LeaguesCreatePageSaga() {
    yield all([takeLatest(LeaguesCreatePageTypes.INIT, init)]);
}
