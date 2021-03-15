import { AnyAction } from 'redux';
import { message } from '@utils';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { NotificationActions, NotificationTypes } from '@actions';
import { NotificationService } from '@services';
import CONSTANTS from '@locale/en-CA';

function* setToken({ token }: AnyAction) {
    try {
        yield call(NotificationService.setToken, { token });
        yield put(NotificationActions.setTokenSuccess());
    } catch (err) {
        yield put(NotificationActions.setTokenFailure(err));
    }
}

function* fetchNotifications({ options }: AnyAction) {
    try {
        const res: any = yield call(
            NotificationService.fetchNotifications,
            options
        );
        const { notifications, _metadata: metadata } = res;
        yield put(
            NotificationActions.fetchNotificationsSuccess(
                notifications,
                metadata
            )
        );
    } catch (err) {
        yield put(NotificationActions.fetchNotificationsFailure(err));
        message.error(CONSTANTS.NOTIFICATION.ERROR.FETCH_ALL);
    }
}

function* fetchPending() {
    try {
        const res: any = yield call(NotificationService.fetchPending);
        yield put(NotificationActions.fetchPendingSuccess(res.count));
    } catch (err) {
        yield put(NotificationActions.fetchPendingFailure(err));
    }
}

function* updateNotification({ id, values }: AnyAction) {
    try {
        const res: any = yield call(
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

function* subscriptionExists({ options }: AnyAction) {
    try {
        const res: any = yield call(
            NotificationService.subscriptionExists,
            options
        );
        const { subscribed } = res;
        yield put(NotificationActions.subscriptionExistsSuccess(subscribed));
    } catch (err) {
        yield put(NotificationActions.subscriptionExistsFailure(err));
        message.error(CONSTANTS.NOTIFICATION.ERROR.SUBSCRIPTION_EXISTS);
    }
}

function* subscribe({ data }: AnyAction) {
    try {
        yield call(NotificationService.subscribe, data);
        yield put(NotificationActions.subscribeSuccess());
        message.success(CONSTANTS.NOTIFICATION.SUCCESS.SUBSCRIBE);
    } catch (err) {
        yield put(NotificationActions.subscribeFailure(err));
        message.error(CONSTANTS.NOTIFICATION.ERROR.SUBSCRIBE);
    }
}

function* unsubscribe({ data }: AnyAction) {
    try {
        yield call(NotificationService.unsubscribe, data);
        yield put(NotificationActions.unsubscribeSuccess());
        message.success(CONSTANTS.NOTIFICATION.SUCCESS.UNSUBSCRIBE);
    } catch (err) {
        yield put(NotificationActions.unsubscribeFailure(err));
        message.error(CONSTANTS.NOTIFICATION.ERROR.UNSUBSCRIBE);
    }
}

export default function* NotificationSaga() {
    yield all([
        takeLatest(NotificationTypes.SET_TOKEN, setToken),
        takeLatest(NotificationTypes.FETCH_NOTIFICATIONS, fetchNotifications),
        takeLatest(NotificationTypes.FETCH_PENDING, fetchPending),
        takeLatest(NotificationTypes.UPDATE_NOTIFICATION, updateNotification),
        takeLatest(NotificationTypes.SUBSCRIPTION_EXISTS, subscriptionExists),
        takeLatest(NotificationTypes.SUBSCRIBE, subscribe),
        takeLatest(NotificationTypes.UNSUBSCRIBE, unsubscribe),
    ]);
}
