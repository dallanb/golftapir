import { all, put, race, select, take, takeLatest } from 'redux-saga/effects';
import ContestsPageActions, { ContestsPageTypes } from './actions';
import { ContestActions, ContestTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* init() {
    try {
        yield put(ContestActions.fetchContests());
        const { failure } = yield race({
            success: take(ContestTypes.FETCH_CONTESTS_SUCCESS),
            failure: take(ContestTypes.FETCH_CONTESTS_FAILURE),
        });

        if (failure) {
            throw new Error(CONSTANTS.CONTEST.ERROR.FETCH);
        }

        yield put(ContestsPageActions.initSuccess());
    } catch (err) {
        yield put(ContestsPageActions.initFailure(err));
    }
}

export default function* ContestsPageSaga() {
    yield all([takeLatest(ContestsPageTypes.INIT, init)]);
}
