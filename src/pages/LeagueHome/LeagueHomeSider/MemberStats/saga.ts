import { all, put, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import LeagueHomePageSiderMemberStatsActions, {
    LeagueHomePageSiderMemberStatsTypes,
} from './actions';

// Action Handlers

function* init({ uuid }: AnyAction) {
    try {
        yield put(LeagueHomePageSiderMemberStatsActions.initSuccess());
    } catch (err) {
        yield put(LeagueHomePageSiderMemberStatsActions.initFailure(err));
    }
}

export default function* LeagueHomePageSiderMemberStatsSaga() {
    yield all([takeLatest(LeagueHomePageSiderMemberStatsTypes.INIT, init)]);
}
