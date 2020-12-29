import { all, put, takeLatest } from 'redux-saga/effects';
import LeaguePageActions, { LeaguePageTypes } from './actions';

function* init() {
    try {
        yield put(LeaguePageActions.initSuccess());
    } catch (err) {
        yield put(LeaguePageActions.initFailure(err));
    }
}

export default function* LeaguePageSaga() {
    yield all([takeLatest(LeaguePageTypes.INIT, init)]);
}
