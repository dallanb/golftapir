import { put, race, take } from 'redux-saga/effects';
import { ContestActions, ContestTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* fetchContestsMaterialized(options: {
    page?: number;
    per_page?: number;
    participants?: string;
}) {
    yield put(ContestActions.fetchContestsMaterialized(options));
    const { success, failure } = yield race({
        success: take(ContestTypes.FETCH_CONTESTS_MATERIALIZED_SUCCESS),
        failure: take(ContestTypes.FETCH_CONTESTS_MATERIALIZED_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH_ALL_MATERIALIZED);
    }
    return success;
}

export default fetchContestsMaterialized;
