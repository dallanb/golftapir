import { put, race, take } from 'redux-saga/effects';
import ScoreActions, { ScoreTypes } from '@actions/ScoreActions';
import CONSTANTS from '@locale/en-CA';

function* updateScoreSheet(uuid: string, data: any) {
    yield put(ScoreActions.updateSheet(uuid, data));
    const { success, failure } = yield race({
        success: take(ScoreTypes.UPDATE_SHEET_SUCCESS),
        failure: take(ScoreTypes.UPDATE_SHEET_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.SCORE.ERROR.UPDATE_SHEET);
    }

    return success;
}

export default updateScoreSheet;
