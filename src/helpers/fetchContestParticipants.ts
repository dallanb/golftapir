import { put, race, take } from 'redux-saga/effects';
import ContestActions, { ContestTypes } from '@actions/ContestActions';
import CONSTANTS from '@locale/en-CA';

function* fetchContestParticipants(contest_uuid: string, options?: any) {
    yield put(ContestActions.fetchContestParticipants(contest_uuid, options));
    const { success, failure } = yield race({
        success: take(ContestTypes.FETCH_CONTEST_PARTICIPANTS_SUCCESS),
        failure: take(ContestTypes.FETCH_CONTEST_PARTICIPANTS_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH_PARTICIPANT);
    }

    return success;
}

export default fetchContestParticipants;
