import { put, race, take } from 'redux-saga/effects';
import { NotificationActions, NotificationTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* subscribe(uuid: string) {
    yield put(NotificationActions.subscribe(uuid));

    const { success, failure } = yield race({
        success: take(NotificationTypes.SUBSCRIBE_SUCCESS),
        failure: take(NotificationTypes.SUBSCRIBE_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.NOTIFICATION.ERROR.SUBSCRIPTION_EXISTS);
    }

    return success;
}

export default subscribe;
