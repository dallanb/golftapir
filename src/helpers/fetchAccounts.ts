import { put, race, take } from 'redux-saga/effects';
import { AccountActions, AccountTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* fetchAccounts(uuid: string) {
    yield put(
        AccountActions.fetchAccounts(uuid, {
            include: 'phone,address,avatar',
        })
    );
    const { success, failure } = yield race({
        success: take(AccountTypes.FETCH_ACCOUNTS_SUCCESS),
        failure: take(AccountTypes.FETCH_ACCOUNTS_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.ACCOUNT.ERROR.FETCH_ALL);
    }

    return success;
}

export default fetchAccounts;
