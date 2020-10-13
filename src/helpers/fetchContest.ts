import { put, race, take } from 'redux-saga/effects';
import { ContestActions, ContestTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* fetchContest(uuid: string) {
    yield put(
        ContestActions.fetchContest(uuid, {
            include: 'participants',
        })
    );
    const { success, failure } = yield race({
        success: take(ContestTypes.FETCH_CONTEST_SUCCESS),
        failure: take(ContestTypes.FETCH_CONTEST_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH);
    }

    return success;
}

export default fetchContest;
