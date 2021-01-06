import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { LeagueMemberSettingsService, MemberService } from '@services';
import { isEmpty as _isEmpty, pick as _pick } from 'lodash';
import LeagueMemberSettingsPageContentLeagueMemberSettingsActions, {
    LeagueMemberSettingsPageContentLeagueMemberSettingsTypes,
} from './actions';
import { prepareInitialValues } from './utils';
import { selectLeagueMemberSettings } from '@pages/LeagueMemberSettings/selector';
import { omit as _omit } from 'lodash';
import { selectMe, selectMyAvatar } from '@selectors/BaseSelector';

function* init() {
    try {
        const account = yield select(selectLeagueMemberSettings);
        const avatar = yield select(selectMyAvatar);
        const initialValues = prepareInitialValues(account);
        yield put(
            LeagueMemberSettingsPageContentLeagueMemberSettingsActions.setInitialValues(
                {
                    ...initialValues,
                    avatar,
                }
            )
        );
        yield put(
            LeagueMemberSettingsPageContentLeagueMemberSettingsActions.initSuccess()
        );
    } catch (err) {
        yield put(
            LeagueMemberSettingsPageContentLeagueMemberSettingsActions.initFailure(
                err
            )
        );
    }
}

function* submit({ data }: AnyAction) {
    try {
        const accountData = _omit(data, ['avatar']); // will have to handle a country update in members
        if (!_isEmpty(accountData)) {
            yield call(
                LeagueMemberSettingsService.updateLeagueMemberSettings,
                'me',
                accountData
            );
        }
        const avatarData = _pick(data, ['avatar']);
        if (!_isEmpty(avatarData)) {
            const me = yield select(selectMe);
            yield call(MemberService.assignAvatar, me.uuid, avatarData.avatar);
        }
        yield put(
            LeagueMemberSettingsPageContentLeagueMemberSettingsActions.submitSuccess()
        );
    } catch (err) {
        yield put(
            LeagueMemberSettingsPageContentLeagueMemberSettingsActions.submitFailure()
        );
    }
}

export default function* LeagueMemberSettingsPageContentLeagueMemberSettingsSaga() {
    yield all([
        takeLatest(
            LeagueMemberSettingsPageContentLeagueMemberSettingsTypes.INIT,
            init
        ),
        takeLatest(
            LeagueMemberSettingsPageContentLeagueMemberSettingsTypes.SUBMIT,
            submit
        ),
    ]);
}
