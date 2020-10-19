import { put, race, take } from 'redux-saga/effects';
import { AccountActions, AccountTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* fetchAccountMembership(
    uuid: string,
    options: {
        include?: string;
    } = {
        include: 'phone,address,avatar',
    }
) {
    yield put(AccountActions.fetchAccountMembership(uuid, options));
    const { success, failure } = yield race({
        success: take(AccountTypes.FETCH_ACCOUNT_MEMBERSHIP_SUCCESS),
        failure: take(AccountTypes.FETCH_ACCOUNT_MEMBERSHIP_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.ACCOUNT.ERROR.FETCH_MEMBERSHIP);
    }

    return success;
}

export default fetchAccountMembership;
