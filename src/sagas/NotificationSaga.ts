import { AnyAction } from 'redux';
import { message } from 'antd';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { NotificationActions, NotificationTypes } from '@actions';
import { NotificationService } from '@services';
import CONSTANTS from '@locale/en-CA';
import { selectData } from '@selectors/NotificationSelector';

function* setToken({ uuid, token }: AnyAction) {
    try {
        yield call(NotificationService.setToken, { uuid, token });
        yield put(NotificationActions.setTokenSuccess());
    } catch (err) {
        yield put(NotificationActions.setTokenFailure(err));
    }
}

function* fetchNotifications({ options, append }: AnyAction) {
    try {
        const res = yield call(NotificationService.fetchNotifications, options);
        const { notifications, _metadata: metadata } = res;
        const data = append ? yield select(selectData) : [];
        yield put(
            NotificationActions.fetchNotificationsSuccess(
                [...data, ...notifications],
                metadata
            )
        );
    } catch (err) {
        yield put(NotificationActions.fetchNotificationsFailure(err));
        message.error(CONSTANTS.NOTIFICATION.ERROR.FETCH_ALL);
    }
}
function* updateNotification({ id, values }: AnyAction) {
    try {
        const res = yield call(
            NotificationService.updateNotification,
            id,
            values
        );
        const { notifications } = res;
        yield put(NotificationActions.updateNotificationSuccess(notifications));
    } catch (err) {
        yield put(NotificationActions.updateNotificationFailure(err));
        message.error(CONSTANTS.NOTIFICATION.ERROR.UPDATE);
    }
}

export default function* NotificationSaga() {
    yield all([
        takeLatest(NotificationTypes.SET_TOKEN, setToken),
        takeLatest(NotificationTypes.FETCH_NOTIFICATIONS, fetchNotifications),
        takeLatest(NotificationTypes.UPDATE_NOTIFICATION, updateNotification),
    ]);
}
