import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import NotificationsPageContentNotificationsActions, {
    NotificationsPageContentNotificationsTypes,
} from './actions';
import { fetchNotifications } from '@helpers';

function* init() {
    try {
        yield put(NotificationsPageContentNotificationsActions.fetchData());
        yield put(NotificationsPageContentNotificationsActions.initSuccess());
    } catch (err) {
        yield put(NotificationsPageContentNotificationsActions.initFailure());
    }
}

function* fetchData({ options = { page: 1, per_page: 10 } }: AnyAction) {
    try {
        const { data, metadata } = yield call(fetchNotifications, options);
        yield put(
            NotificationsPageContentNotificationsActions.fetchDataSuccess(
                data,
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
