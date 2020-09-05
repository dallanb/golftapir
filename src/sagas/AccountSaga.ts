import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import AccountActions, { AccountTypes } from '../reducers/AccountReducer';
import { AccountService } from '../services';

function* fetchAccount({ uuid }: AnyAction) {
    try {
        const res = yield call(AccountService.fetchAccount, uuid, {
            include: 'phone,address,avatar',
        });
        const { accounts } = res;
        yield put(AccountActions.fetchAccountSuccess(accounts));
    } catch (err) {
        yield put(AccountActions.fetchAccountFailure(err));
        message.error('Error fetching Account information');
    }
}

function* fetchAccounts() {
    try {
        const res = yield call(AccountService.fetchAccounts, {
            include: 'phone,address,avatar',
        });
        const { accounts } = res;
        yield put(AccountActions.fetchAccountsSuccess(accounts));
    } catch (err) {
        yield put(AccountActions.fetchAccountsFailure(err));
        message.error('Error fetching Accounts information');
    }
}

function* updateAccount({ uuid, values }: any) {
    try {

        const res = yield call(AccountService.updateAccount, uuid, values);
        const { accounts } = res;
        yield put(AccountActions.updateAccountSuccess(accounts));
    } catch (err) {
        yield put(AccountActions.updateAccountFailure(err));
        message.error('Error updating Accounts information');
    }
}

export default function* AccountSaga() {
    yield all([
        takeLatest(AccountTypes.FETCH_ACCOUNT, fetchAccount),
        takeLatest(AccountTypes.FETCH_ACCOUNTS, fetchAccounts),
        takeLatest(AccountTypes.UPDATE_ACCOUNT, updateAccount),
    ]);
}
