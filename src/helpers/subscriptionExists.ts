import { put, race, take } from 'redux-saga/effects';
import { NotificationActions, NotificationTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* subscriptionExists(uuid: string) {
    yield put(NotificationActions.subscriptionExists({ uuid }));

    const { success, failure } = yield race({
        success: take(NotificationTypes.SUBSCRIPTION_EXISTS_SUCCESS),
        failure: take(NotificationTypes.SUBSCRIPTION_EXISTS_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.NOTIFICATION.ERROR.SUBSCRIPTION_EXISTS);
    }

    return success;
}

export default subscriptionExists;
