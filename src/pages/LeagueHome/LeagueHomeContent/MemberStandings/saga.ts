import { all, call, put, select, take, takeLatest } from 'redux-saga/effects';
import LeagueHomePageContentMemberStandingsActions, {
    LeagueHomePageContentMemberStandingsTypes,
} from './actions';
import { initMemberStandings } from '@pages/LeagueHome/LeagueHomeContent/MemberStandings/helpers';

// Action Handlers

function* init() {
    try {
        yield call(initMemberStandings);
        yield put(LeagueHomePageContentMemberStandingsActions.initSuccess());
    } catch (err) {
        yield put(LeagueHomePageContentMemberStandingsActions.initFailure(err));
    }
}

function* refresh() {
    try {
        yield put(LeagueHomePageContentMemberStandingsActions.refreshSuccess());
    } catch (err) {
        yield put(
            LeagueHomePageContentMemberStandingsActions.refreshFailure(err)
        );
    }
}

export default function* LeagueHomePageContentMemberStandingsSaga() {
    yield all([
        takeLatest(LeagueHomePageContentMemberStandingsTypes.INIT, init),
        takeLatest(LeagueHomePageContentMemberStandingsTypes.REFRESH, refresh),
    ]);
}
