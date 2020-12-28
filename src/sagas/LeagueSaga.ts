import { AnyAction } from 'redux';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import LeagueActions, { LeagueTypes } from '@actions/LeagueActions';
import { LeagueService } from '@services';
import CONSTANTS from '@locale/en-CA';

function* fetchLeague({ uuid, options }: AnyAction) {
    try {
        const res = yield call(LeagueService.fetchLeague, uuid, options);
        const { accounts } = res;
        yield put(LeagueActions.fetchLeagueSuccess(accounts));
    } catch (err) {
        yield put(LeagueActions.fetchLeagueFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.FETCH);
    }
}

function* fetchLeagues({ options }: AnyAction) {
    try {
        const res = yield call(LeagueService.fetchLeagues, options);
        const { accounts } = res;
        yield put(LeagueActions.fetchLeaguesSuccess(accounts));
    } catch (err) {
        yield put(LeagueActions.fetchLeaguesFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.FETCH_ALL);
    }
}

function* updateLeague({ uuid, values }: AnyAction) {
    try {
        const res = yield call(LeagueService.updateLeague, uuid, values);
        const { accounts } = res;
        yield put(LeagueActions.updateLeagueSuccess(accounts));
    } catch (err) {
        yield put(LeagueActions.updateLeagueFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.UPDATE);
    }
}

export default function* LeagueSaga() {
    yield all([
        takeLatest(LeagueTypes.FETCH_ACCOUNT, fetchLeague),
        takeLatest(LeagueTypes.FETCH_ACCOUNTS, fetchLeagues),
        takeLatest(LeagueTypes.UPDATE_ACCOUNT, updateLeague),
    ]);
}
