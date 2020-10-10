import {
    all,
    call,
    put,
    race,
    select,
    take,
    takeLatest,
} from 'redux-saga/effects';
import WagersPageActions, { WagersPageTypes } from './actions';
import { WagerActions, WagerTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

// Action Handler
function* init() {
    try {
        yield call(fetchWagers, {
            page: 1,
            per_page: 100,
        });
        yield put(WagersPageActions.initSuccess());
    } catch (err) {
        yield put(WagersPageActions.initFailure(err));
    }
}

// Helpers
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

export default function* WagersPageSaga() {
    yield all([takeLatest(WagersPageTypes.INIT, init)]);
}
