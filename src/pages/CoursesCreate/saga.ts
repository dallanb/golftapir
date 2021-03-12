import { all, put, takeLatest } from 'redux-saga/effects';

import CoursesCreatePageActions, { CoursesCreatePageTypes } from './actions';

function* init() {
    try {
        yield put(CoursesCreatePageActions.initSuccess());
    } catch (err) {
        yield put(CoursesCreatePageActions.initFailure(err));
    }
}

export default function* CoursesCreatePageSaga() {
    yield all([takeLatest(CoursesCreatePageTypes.INIT, init)]);
}
