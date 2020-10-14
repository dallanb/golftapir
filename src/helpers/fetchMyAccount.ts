import { put, race, take } from 'redux-saga/effects';
import { AccountActions, AccountTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* fetchMyAccount() {
    yield put(
        AccountActions.fetchAccount('me', {
            include: 'phone,address,avatar',
        })
    );
    const { success, failure } = yield race({
        success: take(AccountTypes.FETCH_ACCOUNT_SUCCESS),
        failure: take(AccountTypes.FETCH_ACCOUNT_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH);
    }

    return success;
}

export default fetchMyAccount;
