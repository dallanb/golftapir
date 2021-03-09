import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import LeagueHomePageActions, { LeagueHomePageTypes } from './actions';
import { initLeagueHome } from './helpers';

// Action Handlers

function* init({ uuid }: AnyAction) {
    try {
        yield call(initLeagueHome, uuid);
        yield put(LeagueHomePageActions.initSuccess());
    } catch (err) {
        yield put(LeagueHomePageActions.initFailure(err));
    }
}

export default function* LeagueHomePageSaga() {
    yield all([takeLatest(LeagueHomePageTypes.INIT, init)]);
}
