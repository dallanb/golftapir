import {
    all,
    call,
    put,
    race,
    select,
    take,
    takeLatest,
} from 'redux-saga/effects';
import NotificationsPageActions, { NotificationsPageTypes } from './actions';
import { NotificationActions, NotificationTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

// Action Handler
function* init() {
    try {
        yield call(fetchNotifications, { page: 1, per_page: 100 });
        yield put(NotificationsPageActions.initSuccess());
    } catch (err) {
        yield put(NotificationsPageActions.initFailure(err));
    }
}

// Helpers
function* fetchNotifications(options: { page: number; per_page: number }) {
    yield put(NotificationActions.fetchNotifications(options));
    const { failure } = yield race({
        success: take(NotificationTypes.FETCH_NOTIFICATIONS_SUCCESS),
        failure: take(NotificationTypes.FETCH_NOTIFICATIONS_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH);
    }
}

export default function* NotificationsPageSaga() {
    yield all([takeLatest(NotificationsPageTypes.INIT, init)]);
}
