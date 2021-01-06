import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { MemberService } from '@services';
import { isEmpty as _isEmpty, pick as _pick, omit as _omit } from 'lodash';
import MemberSettingsPageContentMemberActions, {
    MemberSettingsPageContentMemberTypes,
} from './actions';
import { prepareInitialValues } from './utils';
import { selectMember } from '@pages/MemberSettings/selector';

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
        yield put(MemberSettingsPageContentMemberActions.initFailure(err));
    }
}

function* submit({ uuid, data }: AnyAction) {
    try {
        const memberData = _omit(data, ['avatar', 'uuid']);
        if (!_isEmpty(memberData)) {
            yield call(MemberService.updateMember, uuid, memberData);
        }
        const avatarData = _pick(data, ['avatar']);
        if (!_isEmpty(avatarData)) {
            yield call(MemberService.assignAvatar, uuid, avatarData.avatar);
        }
        yield put(MemberSettingsPageContentMemberActions.submitSuccess());
    } catch (err) {
        yield put(MemberSettingsPageContentMemberActions.submitFailure());
    }
}

export default function* MemberSettingsPageContentMemberSaga() {
    yield all([
        takeLatest(MemberSettingsPageContentMemberTypes.INIT, init),
        takeLatest(MemberSettingsPageContentMemberTypes.SUBMIT, submit),
    ]);
}
