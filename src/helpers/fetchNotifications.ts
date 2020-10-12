import { put, race, take } from 'redux-saga/effects';
import { NotificationActions, NotificationTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

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

export default fetchNotifications;
