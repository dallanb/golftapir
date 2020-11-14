import { put, race, take } from 'redux-saga/effects';
import { ScoreActions, ScoreTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* fetchMyScoreContestParticipantSheet(uuid: string, options: any = {}) {
    yield put(ScoreActions.fetchScoreContestParticipantSheet(uuid, options));
    const { success, failure } = yield race({
        success: take(ScoreTypes.FETCH_SCORE_CONTEST_PARTICIPANT_SHEET_SUCCESS),
        failure: take(ScoreTypes.FETCH_SCORE_CONTEST_PARTICIPANT_SHEET_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.SCORE.ERROR.FETCH_CONTEST_SHEET);
    }
    return success;
}

export default fetchMyScoreContestParticipantSheet;
