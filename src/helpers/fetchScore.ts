import { put, race, take } from 'redux-saga/effects';
import { ScoreActions, ScoreTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* fetchScore(uuid: string, options: any = {}) {
    yield put(ScoreActions.fetchScore(uuid, options));
    const { success, failure } = yield race({
        success: take(ScoreTypes.FETCH_SCORE_SUCCESS),
        failure: take(ScoreTypes.FETCH_SCORE_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.SCORE.ERROR.FETCH);
    }

    return success;
}

export default fetchScore;
