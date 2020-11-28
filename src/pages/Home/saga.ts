import { all, put, takeLatest } from 'redux-saga/effects';
import HomePageActions, { HomePageTypes } from './actions';

function* init() {
    try {
        yield put(HomePageActions.initSuccess());
    } catch (err) {
        yield put(HomePageActions.initFailure());
    }
}

export default function* HomePageSaga() {
    yield all([takeLatest(HomePageTypes.INIT, init)]);
}
