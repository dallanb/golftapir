import { AnyAction } from 'redux';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { message } from '@utils';
import AccountActions, { AccountTypes } from '@actions/AccountActions';
import { AccountService } from '@services';
import CONSTANTS from '@locale/en-CA';

function* fetchAccount({ uuid, options }: AnyAction) {
    try {
        const res: any = yield call(AccountService.fetchAccount, uuid, options);
        const { accounts } = res;
        yield put(AccountActions.fetchAccountSuccess(accounts));
    } catch (err) {
        yield put(AccountActions.fetchAccountFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.FETCH);
    }
}

function* fetchMyAccount({ options }: AnyAction) {
    try {
        const res: any = yield call(AccountService.fetchAccount, 'me', options);
        const { accounts } = res;
        yield put(AccountActions.fetchMyAccountSuccess(accounts));
    } catch (err) {
        yield put(AccountActions.fetchMyAccountFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.FETCH);
    }
}

function* fetchAccountMembership({ uuid, options }: AnyAction) {
    try {
        const res: any = yield call(
            AccountService.fetchAccountMembership,
            uuid,
            options
        );
        const { membership } = res;
        yield put(AccountActions.fetchAccountMembershipSuccess(membership));
    } catch (err) {
        yield put(AccountActions.fetchAccountMembershipFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.FETCH_MEMBERSHIP);
    }
}

function* fetchAccounts({ options }: AnyAction) {
    try {
        const res: any = yield call(AccountService.fetchAccounts, options);
        const { accounts } = res;
        yield put(AccountActions.fetchAccountsSuccess(accounts));
    } catch (err) {
        yield put(AccountActions.fetchAccountsFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.FETCH_ALL);
    }
}

function* updateAccount({ uuid, values }: AnyAction) {
    try {
        const res: any = yield call(AccountService.updateAccount, uuid, values);
        const { accounts } = res;
        yield put(AccountActions.updateAccountSuccess(accounts));
    } catch (err) {
        yield put(AccountActions.updateAccountFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.UPDATE);
    }
}

export default function* AccountSaga() {
    yield all([
        takeLatest(AccountTypes.FETCH_ACCOUNT, fetchAccount),
        takeLatest(AccountTypes.FETCH_MY_ACCOUNT, fetchMyAccount),
        takeLatest(
            AccountTypes.FETCH_ACCOUNT_MEMBERSHIP,
            fetchAccountMembership
        ),
        takeLatest(AccountTypes.FETCH_ACCOUNTS, fetchAccounts),
        takeLatest(AccountTypes.UPDATE_ACCOUNT, updateAccount),
    ]);
}
