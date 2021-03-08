import { all, put, takeLatest } from 'redux-saga/effects';
import NotificationsPageActions, { NotificationsPageTypes } from './actions';

function* init() {
    try {
        yield put(NotificationsPageActions.initSuccess());
    } catch (err) {
        yield put(NotificationsPageActions.initFailure(err.toJSON()));
    }
}

export default function* NotificationsPageSaga() {
    yield all([takeLatest(NotificationsPageTypes.INIT, init)]);
}
