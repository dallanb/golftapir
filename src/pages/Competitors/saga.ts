import { all, put, takeLatest } from 'redux-saga/effects';
import CompetitorsPageActions, { CompetitorsPageTypes } from './actions';

function* init() {
    try {
        yield put(CompetitorsPageActions.initSuccess());
    } catch (err) {
        yield put(CompetitorsPageActions.initFailure());
    }
}

export default function* CompetitorsPageSaga() {
    yield all([takeLatest(CompetitorsPageTypes.INIT, init)]);
}
