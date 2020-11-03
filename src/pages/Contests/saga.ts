import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import ContestsPageActions, { ContestsPageTypes } from './actions';
import { fetchContestsMaterialized } from '@helpers';

function* init() {
    try {
        yield fork(fetchContestsMaterialized, {
            page: 1,
            per_page: 100,
        });
        yield put(ContestsPageActions.initSuccess());
    } catch (err) {
        yield put(ContestsPageActions.initFailure(err));
    }
}

export default function* ContestsPageSaga() {
    yield all([takeLatest(ContestsPageTypes.INIT, init)]);
}
