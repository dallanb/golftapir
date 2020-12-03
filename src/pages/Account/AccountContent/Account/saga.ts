import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { AccountService } from '@services';
import AccountPageContentAccountActions, {
    AccountPageContentAccountTypes,
} from './actions';
import { prepareInitialValues } from './utils';
import { selectAccount } from '@pages/Account/selector';

function* init() {
    try {
        const account = yield select(selectAccount);
        const initialValues = prepareInitialValues(account);
        yield put(
            AccountPageContentAccountActions.setInitialValues(initialValues)
        );
        yield put(AccountPageContentAccountActions.initSuccess());
    } catch (err) {
        yield put(AccountPageContentAccountActions.initFailure(err));
    }
}

function* submit({ data }: AnyAction) {
    try {
        yield call(AccountService.updateAccount, 'me', data);
        yield put(AccountPageContentAccountActions.submitSuccess());
    } catch (err) {
        yield put(AccountPageContentAccountActions.submitFailure());
    }
}

export default function* AccountPageContentAccountSaga() {
    yield all([
        takeLatest(AccountPageContentAccountTypes.INIT, init),
        takeLatest(AccountPageContentAccountTypes.SUBMIT, submit),
    ]);
}
