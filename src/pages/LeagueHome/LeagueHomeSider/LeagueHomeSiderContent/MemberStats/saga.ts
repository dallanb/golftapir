import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import LeagueHomePageSiderContentMemberStatsActions, {
    LeagueHomePageSiderContentMemberStatsTypes,
} from './actions';
import { selectMyStat } from '@selectors/BaseSelector';

// Action Handlers

function* init({ uuid }: AnyAction) {
    try {
        const stat = yield select(selectMyStat);
        yield put(LeagueHomePageSiderContentMemberStatsActions.set({ stat }));
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
