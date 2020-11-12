import { put, race, take } from 'redux-saga/effects';
import ContestActions, { ContestTypes } from '@actions/ContestActions';
import CONSTANTS from '@locale/en-CA';

function* fetchContestParticipantUser(contest_uuid: string, user_uuid: string) {
    yield put(
        ContestActions.fetchContestParticipantUser(contest_uuid, user_uuid)
    );
    const { success, failure } = yield race({
        success: take(ContestTypes.FETCH_CONTEST_PARTICIPANT_USER_SUCCESS),
        failure: take(ContestTypes.FETCH_CONTEST_PARTICIPANT_USER_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH_PARTICIPANT);
    }

    return success;
}

export default fetchContestParticipantUser;
