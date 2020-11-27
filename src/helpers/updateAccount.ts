import { put, race, take } from 'redux-saga/effects';
import AccountActions, { AccountTypes } from '@actions/AccountActions';
import CONSTANTS from '@locale/en-CA';

function* updateAccount(uuid: string, data: any) {
    yield put(AccountActions.updateAccount(uuid, data));
    const { success, failure } = yield race({
        success: take(AccountTypes.UPDATE_ACCOUNT_SUCCESS),
        failure: take(AccountTypes.UPDATE_ACCOUNT_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.ACCOUNT.ERROR.UPDATE);
    }

    return success;
}

export default updateAccount;
