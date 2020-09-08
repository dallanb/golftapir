import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import AccountActions, { AccountTypes } from '../reducers/AccountReducer';
import { AccountService } from '../services';
import CONSTANTS from '../locale/en-CA';

function* fetchAccount({ uuid }: AnyAction) {
    try {
        const res = yield call(AccountService.fetchAccount, uuid, {
            include: 'phone,address,avatar',
        });
        const { accounts } = res;
        yield put(AccountActions.fetchAccountSuccess(accounts));
    } catch (err) {
        yield put(AccountActions.fetchAccountFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.FETCH);
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

export default function* AccountSaga() {
    yield all([
        takeLatest(AccountTypes.FETCH_ACCOUNT, fetchAccount),
        takeLatest(AccountTypes.FETCH_ACCOUNTS, fetchAccounts),
        takeLatest(AccountTypes.UPDATE_ACCOUNT, updateAccount),
        takeLatest(AccountTypes.UPDATE_AVATAR, updateAvatar),
    ]);
}
