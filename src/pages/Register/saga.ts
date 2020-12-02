import { all, put, takeLatest } from 'redux-saga/effects';
import RegisterPageActions, { RegisterPageTypes } from './actions';

function* init() {
    try {
        yield put(RegisterPageActions.initSuccess());
    } catch (err) {
        yield put(RegisterPageActions.initFailure(err));
    }
}

export default function* RegisterPageSaga() {
    yield all([takeLatest(RegisterPageTypes.INIT, init)]);
}
