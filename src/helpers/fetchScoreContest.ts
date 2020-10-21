import { put, race, take } from 'redux-saga/effects';
import { ScoreActions, ScoreTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* fetchScoreContest(uuid: string, options: any = {}) {
    yield put(ScoreActions.fetchScoreContest(uuid, options));
    const { success, failure } = yield race({
        success: take(ScoreTypes.FETCH_SCORE_CONTEST_SUCCESS),
        failure: take(ScoreTypes.FETCH_SCORE_CONTEST_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.SCORE.ERROR.FETCH_CONTEST);
    }
    return success;
}

export default fetchScoreContest;
