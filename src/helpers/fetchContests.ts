import { put, race, take } from 'redux-saga/effects';
import { ContestActions, ContestTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* fetchContests(options: { page: number; per_page: number }) {
    yield put(ContestActions.fetchContests(options));
    const { failure } = yield race({
        success: take(ContestTypes.FETCH_CONTESTS_SUCCESS),
        failure: take(ContestTypes.FETCH_CONTESTS_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH);
    }
}

export default fetchContests;
