import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { omit as _omit, pick as _pick, isEmpty as _isEmpty } from 'lodash';
import CONSTANTS from '@locale/en-CA';
import { AccountService, ContestService, MemberService } from '@services';
import { selectMe } from '@selectors/BaseSelector';
import ContestsCreatePageContentContestActions, {
    ContestsCreatePageContentContestTypes,
} from './actions';
import { prepareInitialValues } from './utils';

function* init({ options = { member_uuid: null } }: AnyAction) {
    try {
        const me = yield select(selectMe);
        const members = [];
        if (options.member_uuid) {
            const { members: member } = yield call(
                MemberService.fetchMember,
                options.member_uuid,
                {}
            );
            members.push(member);
        }
        const initialValues = prepareInitialValues({ me, members });
        yield put(
            ContestsCreatePageContentContestActions.setInitialValues(
                initialValues
            )
        );
        yield put(ContestsCreatePageContentContestActions.initSuccess());
    } catch (err) {
        yield put(ContestsCreatePageContentContestActions.initFailure(err));
    }
}

function* submit({ data }: AnyAction) {
    try {
        const contestData = _omit(data, ['avatar']);
        const {
            contests: { uuid },
            contests: result,
        } = yield call(ContestService.createContest, contestData);
        const avatarData = _pick(data, ['avatar']);
        if (!_isEmpty(avatarData)) {
            yield call(ContestService.assignAvatar, uuid, avatarData.avatar);
        }
        yield put(ContestsCreatePageContentContestActions.setResult(result));
        yield put(ContestsCreatePageContentContestActions.submitSuccess());
        message.success(CONSTANTS.CONTEST.SUCCESS.CREATE);
    } catch (err) {
        yield put(ContestsCreatePageContentContestActions.submitFailure());
        message.error(CONSTANTS.CONTEST.ERROR.CREATE);
    }
}

export default function* ContestsCreatePageContentContestSaga() {
    yield all([
        takeLatest(ContestsCreatePageContentContestTypes.INIT, init),
        takeLatest(ContestsCreatePageContentContestTypes.SUBMIT, submit),
    ]);
}
