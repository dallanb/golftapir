import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import ContestPageContentContestLeaderboardScorecardActions, {
    ContestPageContentContestLeaderboardScorecardTypes,
} from './actions';
import { ScoreService } from '@services';
import { normalizeData } from './utils';

// Action Handlers

function* init({ uuid, user_uuid, options }: AnyAction) {
    try {
        const res = yield call(
            ScoreService.fetchScoreContestParticipantSheet,
            uuid,
            user_uuid,
            options
        );
        const { sheets } = res;
        const data = normalizeData(sheets.holes);
        yield put(
            ContestPageContentContestLeaderboardScorecardActions.set({
                data,
            })
        );
        yield put(
            ContestPageContentContestLeaderboardScorecardActions.initSuccess()
        );
    } catch (err) {
        yield put(
            ContestPageContentContestLeaderboardScorecardActions.initFailure(
                err
            )
        );
    }
}

export default function* ContestPageContentContestLeaderboardScorecardSaga() {
    yield all([
        takeLatest(
            ContestPageContentContestLeaderboardScorecardTypes.INIT,
            init
        ),
    ]);
}
