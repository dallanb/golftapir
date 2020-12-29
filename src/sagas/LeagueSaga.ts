import { AnyAction } from 'redux';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import LeagueActions, { LeagueTypes } from '@actions/LeagueActions';
import { LeagueService } from '@services';
import CONSTANTS from '@locale/en-CA';

function* fetchLeague({ uuid, options }: AnyAction) {
    try {
        const res = yield call(LeagueService.fetchLeague, uuid, options);
        const { leagues } = res;
        yield put(LeagueActions.fetchLeagueSuccess(leagues));
    } catch (err) {
        yield put(LeagueActions.fetchLeagueFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.FETCH);
    }
}

function* fetchLeagues({ options }: AnyAction) {
    try {
        const res = yield call(LeagueService.fetchLeagues, options);
        const { leagues } = res;
        yield put(LeagueActions.fetchLeaguesSuccess(leagues));
    } catch (err) {
        yield put(LeagueActions.fetchLeaguesFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.FETCH_ALL);
    }
}

function* updateLeague({ uuid, values }: AnyAction) {
    try {
        const res = yield call(LeagueService.updateLeague, uuid, values);
        const { leagues } = res;
        yield put(LeagueActions.updateLeagueSuccess(leagues));
    } catch (err) {
        yield put(LeagueActions.updateLeagueFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.UPDATE);
    }
}

export default function* LeagueSaga() {
    yield all([
        takeLatest(LeagueTypes.FETCH_LEAGUE, fetchLeague),
        takeLatest(LeagueTypes.FETCH_LEAGUES, fetchLeagues),
        takeLatest(LeagueTypes.UPDATE_LEAGUE, updateLeague),
    ]);
}