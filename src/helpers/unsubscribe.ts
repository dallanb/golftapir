import { put, race, take } from 'redux-saga/effects';
import { NotificationActions, NotificationTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* unsubscribe(uuid: string) {
    yield put(NotificationActions.unsubscribe(uuid));

    const { success, failure } = yield race({
        success: take(NotificationTypes.UNSUBSCRIBE_SUCCESS),
        failure: take(NotificationTypes.UNSUBSCRIBE_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.NOTIFICATION.ERROR.SUBSCRIPTION_EXISTS);
    }

    return success;
}

export default unsubscribe;
