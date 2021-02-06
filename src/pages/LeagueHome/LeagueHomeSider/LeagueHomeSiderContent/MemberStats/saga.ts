import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import LeagueHomePageSiderContentMemberStatsActions, {
    LeagueHomePageSiderContentMemberStatsTypes,
} from './actions';

// Action Handlers

function* init({ uuid }: AnyAction) {
    try {
        yield put(LeagueHomePageSiderContentMemberStatsActions.initSuccess());
    } catch (err) {
        yield put(
            LeagueHomePageSiderContentMemberStatsActions.initFailure(err)
        );
    }
}

export default function* LeagueHomePageSiderContentMemberStatsSaga() {
    yield all([
        takeLatest(LeagueHomePageSiderContentMemberStatsTypes.INIT, init),
    ]);
}
