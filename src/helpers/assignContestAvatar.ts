import { put, race, take } from 'redux-saga/effects';
import { ContestActions, ContestTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* assignContestAvatar(uuid: string, avatar: File) {
    yield put(ContestActions.assignAvatar(uuid, avatar));
    const { success, failure } = yield race({
        success: take(ContestTypes.ASSIGN_AVATAR_SUCCESS),
        failure: take(ContestTypes.ASSIGN_AVATAR_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH);
    }

    return success;
}

export default assignContestAvatar;
