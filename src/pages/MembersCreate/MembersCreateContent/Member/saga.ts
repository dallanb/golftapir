import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { omit as _omit, pick as _pick, isEmpty as _isEmpty } from 'lodash';
import CONSTANTS from '@locale/en-CA';
import { MemberService } from '@services';
import MembersCreatePageContentMemberActions, {
    MembersCreatePageContentMemberTypes,
} from './actions';
import { prepareInitialValues } from './utils';

function* init({ options = { email: null } }: AnyAction) {
    try {
        const initialValues = prepareInitialValues(options);
        yield put(
            MembersCreatePageContentMemberActions.setInitialValues(
                initialValues
            )
        );
        yield put(MembersCreatePageContentMemberActions.initSuccess());
    } catch (err) {
        yield put(MembersCreatePageContentMemberActions.initFailure(err));
    }
}

// TODO
function* submit({ data }: AnyAction) {
    try {
        const { invites: result } = yield call(
            MemberService.createInvite,
            data
        );
        yield put(MembersCreatePageContentMemberActions.setResult(result));
        yield put(MembersCreatePageContentMemberActions.submitSuccess());
        message.success(CONSTANTS.MEMBER.SUCCESS.INVITE);
    } catch (err) {
        yield put(MembersCreatePageContentMemberActions.submitFailure());
        message.error(CONSTANTS.MEMBER.ERROR.INVITE);
    }
}

export default function* MembersCreatePageContentMemberSaga() {
    yield all([
        takeLatest(MembersCreatePageContentMemberTypes.INIT, init),
        takeLatest(MembersCreatePageContentMemberTypes.SUBMIT, submit),
    ]);
}
