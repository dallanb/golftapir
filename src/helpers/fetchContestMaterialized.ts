import { put, race, take } from 'redux-saga/effects';
import { ContestActions, ContestTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* fetchContestMaterialized(uuid: string) {
    yield put(ContestActions.fetchContestMaterialized(uuid));
    const { success, failure } = yield race({
        success: take(ContestTypes.FETCH_CONTEST_MATERIALIZED_SUCCESS),
        failure: take(ContestTypes.FETCH_CONTEST_MATERIALIZED_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH_MATERIALIZED);
    }
    return success;
}

export default fetchContestMaterialized;
