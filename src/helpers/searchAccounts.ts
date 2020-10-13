import { put, race, take } from 'redux-saga/effects';
import { AccountActions, AccountTypes } from '@actions';

function* searchAccounts(key: string): any {
    yield put(AccountActions.searchAccounts(key));
    const { success, failure } = yield race({
        success: take(AccountTypes.SEARCH_ACCOUNTS_SUCCESS),
        failure: take(AccountTypes.SEARCH_ACCOUNTS_FAILURE),
    });

    if (failure) {
        throw new Error('Unable to fetch accounts');
    }

    return success;
}

export default searchAccounts;
