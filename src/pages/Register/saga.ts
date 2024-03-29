import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { omit as _omit, pick as _pick } from 'lodash';
import RegisterPageActions, { RegisterPageTypes } from './actions';
import { AuthService, MemberService } from '@services';
import { message } from '@utils';
import CONSTANTS from '@locale/en-CA';
import MemberSettingsPageContentMemberActions from '@pages/MemberSettings/MemberSettingsContent/Member/actions';
import { BaseActions } from '@actions';
import AuthActions from '@actions/AuthActions';

function* init({ token }: AnyAction) {
    try {
        if (token) {
            const { invites: invite }: any = yield call(
                AuthService.fetchInvite,
                token
            );
            let props = _pick(invite, ['email', 'token']);
            props = Object.assign(
                props,
                props.email && { confirm_email: props.email }
            );
            yield put(RegisterPageActions.setFormInitialValues(props));
        }
        yield put(RegisterPageActions.initSuccess());
    } catch (err) {
        yield put(RegisterPageActions.initFailure(err));
    }
}

export default function* RegisterPageSaga() {
    yield all([takeLatest(RegisterPageTypes.INIT, init)]);
}
