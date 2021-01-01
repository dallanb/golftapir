import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import LeagueMembersPageActions, { LeagueMembersPageTypes } from './actions';
import { initLeagueMembers } from './helpers';

// Action Handlers

function* init({ uuid }: AnyAction) {
    try {
        yield call(initLeagueMembers, uuid);
        yield put(LeagueMembersPageActions.initSuccess());
    } catch (err) {
        yield put(LeagueMembersPageActions.initFailure(err));
    }
}

export default function* LeagueMembersPageSaga() {
    yield all([takeLatest(LeagueMembersPageTypes.INIT, init)]);
}
