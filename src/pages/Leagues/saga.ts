import { all, put, takeLatest } from 'redux-saga/effects';
import LeaguesPageActions, { LeaguesPageTypes } from './actions';

function* init() {
    try {
        yield put(LeaguesPageActions.initSuccess());
    } catch (err) {
        yield put(LeaguesPageActions.initFailure(err));
    }
}

export default function* LeaguesPageSaga() {
    yield all([takeLatest(LeaguesPageTypes.INIT, init)]);
}
