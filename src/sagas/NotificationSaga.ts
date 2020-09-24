import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { NotificationActions, NotificationTypes } from '@actions';
import { NotificationService } from '@services';

function* setToken({ uuid, token }: AnyAction) {
    try {
        yield call(NotificationService.setToken, { uuid, token });
        yield put(NotificationActions.setTokenSuccess());
    } catch (err) {
        yield put(NotificationActions.setTokenFailure(err));
    }
}
export default function* NotificationSaga() {
    yield all([takeLatest(NotificationTypes.SET_TOKEN, setToken)]);
}
