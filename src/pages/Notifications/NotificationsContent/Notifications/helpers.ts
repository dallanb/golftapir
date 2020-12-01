import { put, race, take } from 'redux-saga/effects';
import NotificationsPageContentNotificationsActions, {
    NotificationsPageContentNotificationsTypes,
} from './actions';
import CONSTANTS from '@locale/en-CA';

export function* fetchNotificationsList() {
    yield put(NotificationsPageContentNotificationsActions.fetchData());
    const { success, failure } = yield race({
        success: take(
            NotificationsPageContentNotificationsTypes.FETCH_DATA_SUCCESS
        ),
        failure: take(
            NotificationsPageContentNotificationsTypes.FETCH_DATA_FAILURE
        ),
    });
    if (failure) {
        throw new Error(CONSTANTS.NOTIFICATION.ERROR.FETCH_ALL);
    }
    return success;
}
