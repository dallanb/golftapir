import { AnyAction } from 'redux';
import { all, put, takeLatest } from 'redux-saga/effects';
import ContestUpdatePageActions, { ContestUpdatePageTypes } from './actions';

function* init({ data: contest }: AnyAction) {
    try {
        yield put(ContestUpdatePageActions.set({ contest }));
        yield put(ContestUpdatePageActions.initSuccess());
    } catch (err) {
        yield put(ContestUpdatePageActions.initFailure(err.toJSON()));
    }
}

export default function* ContestsCreatePageSaga() {
    yield all([takeLatest(ContestUpdatePageTypes.INIT, init)]);
}
