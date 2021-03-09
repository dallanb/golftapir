import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { message } from '@utils';
import { MemberService } from '@services';
import { isEmpty as _isEmpty, pick as _pick, omit as _omit } from 'lodash';
import MemberSettingsPageContentMemberActions, {
    MemberSettingsPageContentMemberTypes,
} from './actions';
import { prepareInitialValues } from './utils';
import { selectMember } from '@pages/MemberSettings/selector';
import CONSTANTS from '@locale/en-CA';
import { BaseActions } from '@actions';

function* init() {
    try {
        const member = yield select(selectMember);
        const initialValues = prepareInitialValues(member);
        yield put(
            MemberSettingsPageContentMemberActions.setInitialValues({
                ...initialValues,
            })
        );
        yield put(MemberSettingsPageContentMemberActions.initSuccess());
    } catch (err) {
        yield put(
            MemberSettingsPageContentMemberActions.initFailure(err)
        );
    }
}

function* submit({ uuid, data }: AnyAction) {
    try {
        const memberData = _omit(data, ['avatar', 'uuid']);
        if (!_isEmpty(memberData)) {
            yield call(MemberService.updateMember, uuid, memberData);
            message.success(CONSTANTS.MEMBER.SUCCESS.UPDATE);
        }
        const avatarData = _pick(data, ['avatar']);
        if (!_isEmpty(avatarData)) {
            yield call(MemberService.assignAvatar, uuid, avatarData.avatar);
            message.success(CONSTANTS.MEMBER.SUCCESS.ASSIGN_AVATAR);
        }
        yield put(MemberSettingsPageContentMemberActions.submitSuccess());
        yield put(BaseActions.refreshMe());
    } catch (err) {
        yield put(MemberSettingsPageContentMemberActions.submitFailure());
        message.error(CONSTANTS.MEMBER.ERROR.UPDATE);
    }
}

export default function* MemberSettingsPageContentMemberSaga() {
    yield all([
        takeLatest(MemberSettingsPageContentMemberTypes.INIT, init),
        takeLatest(MemberSettingsPageContentMemberTypes.SUBMIT, submit),
    ]);
}
