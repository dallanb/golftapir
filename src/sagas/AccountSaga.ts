import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import AccountActions, { AccountTypes } from '@reducers/data/AccountReducer';
import { AccountService } from '@services';
import CONSTANTS from '@locale/en-CA';
import { withTarget } from '@utils';

function* fetchAccount({ uuid, target }: AnyAction) {
    try {
        const res = yield call(AccountService.fetchAccount, uuid, {
            include: 'phone,address,avatar',
        });
        const { accounts } = res;
        yield put(
            withTarget(AccountActions.fetchAccountSuccess, target)(accounts)
        );
    } catch (err) {
        yield put(withTarget(AccountActions.fetchAccountFailure, target)(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.FETCH);
    }
}

function* fetchAccounts({ target }: AnyAction) {
    try {
        const res = yield call(AccountService.fetchAccounts, {
            include: 'phone,address,avatar',
        });
        const { accounts } = res;
        yield put(
            withTarget(AccountActions.fetchAccountsSuccess, target)(accounts)
        );
    } catch (err) {
        yield put(withTarget(AccountActions.fetchAccountsFailure, target)(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.FETCH_ALL);
    }
}

function* updateAccount({ uuid, values, target }: AnyAction) {
    try {
        const res = yield call(AccountService.updateAccount, uuid, values);
        const { accounts } = res;
        yield put(
            withTarget(AccountActions.updateAccountSuccess, target)(accounts)
        );
    } catch (err) {
        yield put(withTarget(AccountActions.updateAccountFailure, target)(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.UPDATE);
    }
}

function* updateAvatar({ uuid, avatar, target }: AnyAction) {
    try {
        const res = yield call(AccountService.updateAvatar, uuid, avatar);
        // const { accounts } = res;
        console.log(res);
        yield put(withTarget(AccountActions.updateAvatarSuccess, target)());
    } catch (err) {
        yield put(withTarget(AccountActions.updateAvatarFailure, target)(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.UPDATE_AVATAR);
    }
}

function* searchAccounts({ key, target }: any) {
    try {
        const res = yield call(AccountService.searchAccounts, {
            key,
            fields: 'name',
        });
        const { accounts } = res;
        yield put(
            withTarget(AccountActions.searchAccountsSuccess, target)(accounts)
        );
    } catch (err) {
        yield put(
            withTarget(AccountActions.searchAccountsFailure, target)(err)
        );
        message.error(CONSTANTS.ACCOUNT.ERROR.SEARCH_ALL);
    }
}

export default function* AccountSaga() {
    yield all([
        takeLatest(AccountTypes.FETCH_ACCOUNT, fetchAccount),
        takeLatest(AccountTypes.FETCH_ACCOUNTS, fetchAccounts),
        takeLatest(AccountTypes.UPDATE_ACCOUNT, updateAccount),
        takeLatest(AccountTypes.UPDATE_AVATAR, updateAvatar),
        takeLatest(AccountTypes.SEARCH_ACCOUNTS, searchAccounts),
    ]);
}
