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

export default function* NotificationsPageContentNotificationsSaga() {
    yield all([
        takeLatest(NotificationsPageContentNotificationsTypes.INIT, init),
        takeLatest(
            NotificationsPageContentNotificationsTypes.FETCH_DATA,
            fetchData
        ),
    ]);
}
