import { AnyAction } from 'redux';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import AccountActions, { AccountTypes } from '@actions/AccountActions';
import { AccountService } from '@services';
import CONSTANTS from '@locale/en-CA';

function* fetchAccount({ uuid, options }: AnyAction) {
    try {
        const res = yield call(AccountService.fetchAccount, uuid, options);
        const { accounts } = res;
        yield put(AccountActions.fetchAccountSuccess(accounts));
    } catch (err) {
        yield put(AccountActions.fetchAccountFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.FETCH);
    }
}

function* fetchAccountMembership({ uuid, options }: AnyAction) {
    try {
        const res = yield call(
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
        const res = yield call(AccountService.fetchAccounts, options);
        const { accounts } = res;
        yield put(AccountActions.fetchAccountsSuccess(accounts));
    } catch (err) {
        yield put(AccountActions.fetchAccountsFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.FETCH_ALL);
    }
}

function* updateAccount({ uuid, values }: AnyAction) {
    try {
        const res = yield call(AccountService.updateAccount, uuid, values);
        const { accounts } = res;
        yield put(AccountActions.updateAccountSuccess(accounts));
    } catch (err) {
        yield put(AccountActions.updateAccountFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.UPDATE);
    }
}

function* assignAvatar({ uuid, avatar }: AnyAction) {
    try {
        yield fork(AccountService.assignAvatar, uuid, avatar);
        yield put(AccountActions.assignAvatarSuccess());
    } catch (err) {
        yield put(AccountActions.assignAvatarFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.ASSIGN_AVATAR);
    }
}

function* searchAccounts({ key }: AnyAction) {
    try {
        const res = yield call(AccountService.searchAccounts, {
            key,
            fields: 'name',
        });
        const { accounts } = res;
        yield put(AccountActions.searchAccountsSuccess(accounts));
    } catch (err) {
        yield put(AccountActions.searchAccountsFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.SEARCH_ALL);
    }
}

function* bulkFetchAccounts({ within, options }: AnyAction) {
    try {
        const bulkAccounts = yield call(
            AccountService.bulkFetchAccounts,
            { within },
            options
        );
        yield put(AccountActions.bulkFetchAccountsSuccess(bulkAccounts));
    } catch (err) {
        yield put(AccountActions.bulkFetchAccountsFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.BULK_FETCH_ALL);
    }
}

export default function* AccountSaga() {
    yield all([
        takeLatest(AccountTypes.FETCH_ACCOUNT, fetchAccount),
        takeLatest(
            AccountTypes.FETCH_ACCOUNT_MEMBERSHIP,
            fetchAccountMembership
        ),
        takeLatest(AccountTypes.FETCH_ACCOUNTS, fetchAccounts),
        takeLatest(AccountTypes.UPDATE_ACCOUNT, updateAccount),
        takeLatest(AccountTypes.ASSIGN_AVATAR, assignAvatar),
        takeLatest(AccountTypes.SEARCH_ACCOUNTS, searchAccounts),
        takeLatest(AccountTypes.BULK_FETCH_ACCOUNTS, bulkFetchAccounts),
    ]);
}
