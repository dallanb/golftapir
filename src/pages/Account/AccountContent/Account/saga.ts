import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { AccountService, MemberService } from '@services';
import { isEmpty as _isEmpty, pick as _pick } from 'lodash';
import AccountPageContentAccountActions, {
    AccountPageContentAccountTypes,
} from './actions';
import { prepareInitialValues } from './utils';
import { selectAccount } from '@pages/Account/selector';
import { omit as _omit } from 'lodash';
import { selectMeData, selectMyAvatar } from '@selectors/BaseSelector';
import { message } from 'antd';
import CONSTANTS from '@locale/en-CA';
import { BaseActions } from '@actions';

function* init() {
    try {
        const account: any = yield select(selectAccount);
        const avatar: any = yield select(selectMyAvatar);
        const initialValues = prepareInitialValues(account);
        yield put(
            AccountPageContentAccountActions.setInitialValues({
                ...initialValues,
                avatar,
            })
        );
        yield put(AccountPageContentAccountActions.initSuccess());
    } catch (err) {
        yield put(AccountPageContentAccountActions.initFailure(err));
    }
}

function* submit({ data }: AnyAction) {
    try {
        const accountData = _omit(data, ['avatar']); // will have to handle a country update in members
        if (!_isEmpty(accountData)) {
            yield call(AccountService.updateAccount, 'me', accountData);
            message.success(CONSTANTS.ACCOUNT.SUCCESS.UPDATE);
        }
        const avatarData = _pick(data, ['avatar']);
        if (!_isEmpty(avatarData)) {
            const me: any = yield select(selectMeData);
            yield call(MemberService.assignAvatar, me.uuid, avatarData.avatar);
            message.success(CONSTANTS.ACCOUNT.SUCCESS.ASSIGN_AVATAR);
        }
        yield put(AccountPageContentAccountActions.submitSuccess());
        yield put(BaseActions.refreshMe());
    } catch (err) {
        yield put(AccountPageContentAccountActions.submitFailure());
        message.error(CONSTANTS.ACCOUNT.ERROR.UPDATE);
    }
}

export default function* AccountPageContentAccountSaga() {
    yield all([
        takeLatest(AccountPageContentAccountTypes.INIT, init),
        takeLatest(AccountPageContentAccountTypes.SUBMIT, submit),
    ]);
}
