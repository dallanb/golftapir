import { put, race, take } from 'redux-saga/effects';
import ScoreActions, { ScoreTypes } from '@actions/ScoreActions';
import CONSTANTS from '@locale/en-CA';

function* updateScoreSheetHole(uuid: string, holeId: string, data: any) {
    yield put(ScoreActions.updateHole(uuid, holeId, data));
    const { success, failure } = yield race({
        success: take(ScoreTypes.UPDATE_HOLE_SUCCESS),
        failure: take(ScoreTypes.UPDATE_HOLE_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.SCORE.ERROR.UPDATE_HOLE);
    }

    return success;
}

export default updateScoreSheetHole;
