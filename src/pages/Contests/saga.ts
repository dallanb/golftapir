import {
    all,
    call,
    put,
    race,
    select,
    take,
    takeLatest,
} from 'redux-saga/effects';
import ContestsPageActions, { ContestsPageTypes } from './actions';
import { ContestActions, ContestTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

// Action Handler
function* init() {
    try {
        yield call(fetchContests, {
            page: 1,
            per_page: 100,
        });
        yield put(ContestsPageActions.initSuccess());
    } catch (err) {
        yield put(ContestsPageActions.initFailure(err));
    }
}

// Helpers
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

export default function* ContestsPageSaga() {
    yield all([takeLatest(ContestsPageTypes.INIT, init)]);
}
