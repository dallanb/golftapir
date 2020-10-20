import { all, call, put, race, take, takeLatest } from 'redux-saga/effects';
import ContestMatchupPageActions, { ContestMatchupPageTypes } from './actions';

function* init() {
    try {
        yield put(ContestMatchupPageActions.initSuccess());
    } catch (err) {
        yield put(ContestMatchupPageActions.initFailure());
    }
}

export default function* ContestMatchupPageSaga() {
    yield all([takeLatest(ContestMatchupPageTypes.INIT, init)]);
}
