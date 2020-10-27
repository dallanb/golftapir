import { AnyAction } from 'redux';
import { put, race, take } from 'redux-saga/effects';
import ScoreActions, { ScoreTypes } from '@actions/ScoreActions';
import CONSTANTS from '@locale/en-CA';

function* updateScore(uuid: string, data: any) {
    yield put(ScoreActions.updateScore(uuid, data));
    const { success, failure } = yield race({
        success: take(ScoreTypes.UPDATE_SCORE_SUCCESS),
        failure: take(ScoreTypes.UPDATE_SCORE_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.SCORE.ERROR.UPDATE);
    }

    return success;
}

export default updateScore;
