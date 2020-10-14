import { AnyAction } from 'redux';
import { put, race, take } from 'redux-saga/effects';
import ContestActions, { ContestTypes } from '@actions/ContestActions';
import CONSTANTS from '@locale/en-CA';

function* updateContest(uuid: string, data: any) {
    yield put(ContestActions.updateContest(uuid, data));
    const { success, failure } = yield race({
        success: take(ContestTypes.UPDATE_CONTEST_SUCCESS),
        failure: take(ContestTypes.UPDATE_CONTEST_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.UPDATE);
    }

    return success;
}

export default updateContest;
