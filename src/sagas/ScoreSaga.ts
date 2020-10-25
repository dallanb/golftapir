import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import ScoreActions, { ScoreTypes } from '@actions/ScoreActions';
import { ScoreService } from '@services';
import CONSTANTS from '@locale/en-CA';

function* fetchScore({ uuid, options }: AnyAction) {
    try {
        const res = yield call(ScoreService.fetchScore, uuid, options);
        const { scores, _metadata: metadata } = res;
        yield put(ScoreActions.fetchScoreSuccess(scores, metadata));
    } catch (err) {
        yield put(ScoreActions.fetchScoreFailure(err));
        message.error(CONSTANTS.SCORE.ERROR.FETCH);
    }
}
function* fetchScoreContest({ uuid, options }: AnyAction) {
    try {
        const res = yield call(ScoreService.fetchScoreContest, uuid, options);
        const { scores, _metadata: metadata } = res;
        yield put(ScoreActions.fetchScoreContestSuccess(scores, metadata));
    } catch (err) {
        yield put(ScoreActions.fetchScoreContestFailure(err));
        message.error(CONSTANTS.SCORE.ERROR.FETCH_CONTEST);
    }
}

export default function* ScoreSaga() {
    yield all([
        takeLatest(ScoreTypes.FETCH_SCORE, fetchScore),
        takeLatest(ScoreTypes.FETCH_SCORE_CONTEST, fetchScoreContest),
    ]);
}
