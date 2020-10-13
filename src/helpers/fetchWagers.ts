import { put, race, take } from 'redux-saga/effects';
import { WagerActions, WagerTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* fetchWagers(options: { page: number; per_page: number }) {
    yield put(WagerActions.fetchWagers(options));
    const { failure } = yield race({
        success: take(WagerTypes.FETCH_WAGERS_SUCCESS),
        failure: take(WagerTypes.FETCH_WAGERS_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH);
    }
}

export default fetchWagers;
