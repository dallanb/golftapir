import { put, race, take } from 'redux-saga/effects';
import { AccountActions, AccountTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* fetchAccount(uuid: string) {
    yield put(
        AccountActions.fetchAccount(uuid, {
            include: 'phone,address',
        })
    );
    const { success, failure } = yield race({
        success: take(AccountTypes.FETCH_ACCOUNT_SUCCESS),
        failure: take(AccountTypes.FETCH_ACCOUNT_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.ACCOUNT.ERROR.FETCH);
    }

    return success;
}

export default fetchAccount;
