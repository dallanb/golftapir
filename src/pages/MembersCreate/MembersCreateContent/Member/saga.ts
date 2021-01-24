import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import CONSTANTS from '@locale/en-CA';
import { LeagueService } from '@services';
import MembersCreatePageContentMemberActions, {
    MembersCreatePageContentMemberTypes,
} from './actions';
import { prepareInitialValues } from './utils';
import { selectLeagueUUID } from '@apps/LeagueApp/selector';
import { get as _get, omit as _omit } from 'lodash';

function* init({ options = { email: null } }: AnyAction) {
    try {
        const initialValues = prepareInitialValues({
            ...options,
            league_uuid: yield select(selectLeagueUUID),
        });
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

function* submit({ data }: AnyAction) {
    // BUG
    try {
        const memberData = _omit(data, ['league_uuid']); // TODO: will have to handle a country update in members
        const uuid = _get(data, ['league_uuid']);
        const { members: result } = yield call(
            LeagueService.createMember,
            uuid,
            memberData
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
