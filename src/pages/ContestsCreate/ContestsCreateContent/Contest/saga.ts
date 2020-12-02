import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { omit as _omit, pick as _pick, isEmpty as _isEmpty } from 'lodash';
import ContestsCreatePageContentContestActions, {
    ContestsCreatePageContentContestTypes,
} from './actions';
import { prepareInitialValues } from './utils';
import {
    assignContestAvatar,
    createContest,
    fetchAccountMembership,
} from '@helpers';
import { selectMe } from '@selectors/BaseSelector';

function* init({ options = { participant_uuid: null } }: AnyAction) {
    try {
        const me = yield select(selectMe);
        const members = [];
        if (options.participant_uuid) {
            const { data: member } = yield call(
                fetchAccountMembership,
                options.participant_uuid,
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
            data: { uuid },
            data: result,
        } = yield call(createContest, contestData);
        const avatarData = _pick(data, ['avatar']);
        if (!_isEmpty(avatarData)) {
            yield call(assignContestAvatar, uuid, avatarData.avatar);
        }
        yield put(ContestsCreatePageContentContestActions.setResult(result));
        yield put(ContestsCreatePageContentContestActions.submitSuccess());
    } catch (err) {
        yield put(ContestsCreatePageContentContestActions.submitFailure());
    }
}

export default function* ContestsCreatePageContentContestSaga() {
    yield all([
        takeLatest(ContestsCreatePageContentContestTypes.INIT, init),
        takeLatest(ContestsCreatePageContentContestTypes.SUBMIT, submit),
    ]);
}
