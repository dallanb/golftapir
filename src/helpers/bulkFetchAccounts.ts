import { put, race, take } from 'redux-saga/effects';
import { AccountActions, AccountTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* bulkFetchAccounts(accounts: string[]) {
    yield put(
        AccountActions.bulkFetchAccounts(
            { key: 'membership_uuid', value: accounts },
            {
                include: 'avatar',
            }
        )
    );
    const { success, failure } = yield race({
        success: take(AccountTypes.BULK_FETCH_ACCOUNTS_SUCCESS),
        failure: take(AccountTypes.BULK_FETCH_ACCOUNTS_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH);
    }

    return success;
}

export default bulkFetchAccounts;
