import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { NotificationService } from '@services';
import NotificationsPageContentNotificationsActions, {
    NotificationsPageContentNotificationsTypes,
} from './actions';
import { fetchNotificationsList } from './helpers';

function* init() {
    try {
        yield call(fetchNotificationsList);
        yield put(NotificationsPageContentNotificationsActions.initSuccess());
    } catch (err) {
        yield put(
            NotificationsPageContentNotificationsActions.initFailure(err)
        );
    }
}

function* fetchData({ options = { page: 1, per_page: 10 } }: AnyAction) {
    try {
        const { notifications, _metadata: metadata } = yield call(
            NotificationService.fetchNotifications,
            options
        );
        yield put(
            NotificationsPageContentNotificationsActions.fetchDataSuccess(
                notifications,
                metadata
            )
        );
    } catch (err) {
        yield put(
            NotificationsPageContentNotificationsActions.fetchDataFailure(err)
        );
    }
}
function* markNotificationAsRead({ _id }: AnyAction) {
    try {
        const { notifications } = yield call(
            NotificationService.updateNotification,
            _id,
            {
                read: true,
            }
        );

        yield put(
            NotificationsPageContentNotificationsActions.markNotificationAsReadSuccess(
                _id,
                notifications
            )
        );
    } catch (err) {
        yield put(
            NotificationsPageContentNotificationsActions.markNotificationAsReadFailure(
                err
            )
        );
    }
}

function* markNotificationAsUnread({ _id }: AnyAction) {
    try {
        const { notifications } = yield call(
            NotificationService.updateNotification,
            _id,
            {
                read: false,
            }
        );

        yield put(
            NotificationsPageContentNotificationsActions.markNotificationAsUnreadSuccess(
                _id,
                notifications
            )
        );
    } catch (err) {
        yield put(
            NotificationsPageContentNotificationsActions.markNotificationAsUnreadFailure(
                err
            )
        );
    }
}

function* markNotificationAsArchived({ _id }: AnyAction) {
    try {
        const { notifications } = yield call(
            NotificationService.updateNotification,
            _id,
            {
                archived: true,
            }
        );

        yield put(
            NotificationsPageContentNotificationsActions.markNotificationAsArchivedSuccess(
                _id,
                notifications
            )
        );
    } catch (err) {
        yield put(
            NotificationsPageContentNotificationsActions.markNotificationAsArchivedFailure(
                err
            )
        );
    }
}

export default function* NotificationsPageContentNotificationsSaga() {
    yield all([
        takeLatest(NotificationsPageContentNotificationsTypes.INIT, init),
        takeLatest(
            NotificationsPageContentNotificationsTypes.FETCH_DATA,
            fetchData
        ),
        takeLatest(
            NotificationsPageContentNotificationsTypes.MARK_NOTIFICATION_AS_READ,
            markNotificationAsRead
        ),
        takeLatest(
            NotificationsPageContentNotificationsTypes.MARK_NOTIFICATION_AS_UNREAD,
            markNotificationAsUnread
        ),
        takeLatest(
            NotificationsPageContentNotificationsTypes.MARK_NOTIFICATION_AS_ARCHIVED,
            markNotificationAsArchived
        ),
    ]);
}
