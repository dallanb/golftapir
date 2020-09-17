import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
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

function* updateAvatar({ uuid, avatar }: AnyAction) {
    try {
        const res = yield call(AccountService.updateAvatar, uuid, avatar);
        // const { accounts } = res;
        console.log(res);
        yield put(AccountActions.updateAvatarSuccess());
    } catch (err) {
        yield put(AccountActions.updateAvatarFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.UPDATE_AVATAR);
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

function* bulkFetchAccounts({ uuid, options }: AnyAction) {
    try {
        const res = yield call(
            AccountService.bulkFetchAccounts,
            { uuid },
            options
        );
        const { accounts } = res;
        yield put(AccountActions.bulkFetchAccountsSuccess(accounts));
    } catch (err) {
        yield put(AccountActions.bulkFetchAccountsFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.BULK_FETCH_ALL);
    }
}

export default function* AccountSaga() {
    yield all([
        takeLatest(AccountTypes.FETCH_ACCOUNT, fetchAccount),
        takeLatest(AccountTypes.FETCH_ACCOUNTS, fetchAccounts),
        takeLatest(AccountTypes.UPDATE_ACCOUNT, updateAccount),
        takeLatest(AccountTypes.UPDATE_AVATAR, updateAvatar),
        takeLatest(AccountTypes.SEARCH_ACCOUNTS, searchAccounts),
        takeLatest(AccountTypes.BULK_FETCH_ACCOUNTS, bulkFetchAccounts),
    ]);
}
