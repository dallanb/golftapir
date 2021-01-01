import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import LeaguePageActions, { LeaguePageTypes } from './actions';
import { initLeague } from './helpers';

// Action Handlers

function* init({ uuid }: AnyAction) {
    try {
        yield call(initLeague, uuid);
        yield put(LeaguePageActions.initSuccess());
    } catch (err) {
        yield put(LeaguePageActions.initFailure(err));
    }
}

export default function* LeaguePageSaga() {
    yield all([
        takeLatest(LeaguePageTypes.INIT, init),
    ]);
}
