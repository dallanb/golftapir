import { put, race, take } from 'redux-saga/effects';
import { AccountActions, AccountTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* fetchMyAccount(options?: any) {
    yield put(AccountActions.fetchMyAccount(options));
    const { success, failure } = yield race({
        success: take(AccountTypes.FETCH_MY_ACCOUNT_SUCCESS),
        failure: take(AccountTypes.FETCH_MY_ACCOUNT_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.ACCOUNT.ERROR.FETCH);
    }

    return success;
}

export default fetchMyAccount;
