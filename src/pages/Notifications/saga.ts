import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchNotifications } from '@helpers';
import NotificationsPageActions, { NotificationsPageTypes } from './actions';

function* init() {
    try {
        yield call(fetchNotifications, { page: 1, per_page: 100 });
        yield put(NotificationsPageActions.initSuccess());
    } catch (err) {
        yield put(NotificationsPageActions.initFailure(err));
    }
}

export default function* NotificationsPageSaga() {
    yield all([takeLatest(NotificationsPageTypes.INIT, init)]);
}
