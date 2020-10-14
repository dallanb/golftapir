import { AnyAction } from 'redux';
import { put, race, take } from 'redux-saga/effects';
import ContestActions, { ContestTypes } from '@actions/ContestActions';
import CONSTANTS from '@locale/en-CA';

function* createContest(data: any) {
    yield put(ContestActions.createContest(data));

    const { success, failure } = yield race({
        success: take(ContestTypes.CREATE_CONTEST_SUCCESS),
        failure: take(ContestTypes.CREATE_CONTEST_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH);
    }

    return success;
}

export default createContest;
