import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import LeagueHomePageContentMemberStatsActions, {
    LeagueHomePageContentMemberStatsTypes,
} from './actions';
import { selectMyStat } from '@selectors/BaseSelector';

// Action Handlers

function* init({ uuid }: AnyAction) {
    try {
        const stat = yield select(selectMyStat);
        yield put(LeagueHomePageContentMemberStatsActions.set({ stat }));
        yield put(LeagueHomePageContentMemberStatsActions.initSuccess());
    } catch (err) {
        yield put(LeagueHomePageContentMemberStatsActions.initFailure(err));
    }
}

export default function* LeagueHomePageContentMemberStatsSaga() {
    yield all([takeLatest(LeagueHomePageContentMemberStatsTypes.INIT, init)]);
}
