import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { isEmpty as _isEmpty, omit as _omit, pick as _pick } from 'lodash';
import { ContestService } from '@services';
import ContestUpdatePageContentContestActions, {
    ContestUpdatePageContentContestTypes,
} from './actions';
import { prepareInitialValues } from './utils';
import { selectUUID } from './selector';
import { selectContest } from '@pages/ContestUpdate/selector';

function* init() {
    try {
        const contest = yield select(selectContest);
        const initialValues = prepareInitialValues(contest);
        yield put(
            ContestUpdatePageContentContestActions.setInitialValues(
                initialValues
            )
        );
        yield put(ContestUpdatePageContentContestActions.setUUID(contest.uuid));
        yield put(ContestUpdatePageContentContestActions.initSuccess());
    } catch (err) {
        yield put(
            ContestUpdatePageContentContestActions.initFailure(err)
        );
    }
}

function* submit({ data }: AnyAction) {
    try {
        const uuid = yield select(selectUUID);
        const contestData = _omit(data, ['avatar']);
        if (!_isEmpty(contestData)) {
            yield call(ContestService.updateContest, uuid, contestData);
        }
        const avatarData = _pick(data, ['avatar']);
        if (!_isEmpty(avatarData)) {
            yield call(ContestService.assignAvatar, uuid, avatarData.avatar);
        }
        yield put(ContestUpdatePageContentContestActions.submitSuccess());
    } catch (err) {
        yield put(ContestUpdatePageContentContestActions.submitFailure());
    }
}

export default function* ContestUpdatePageContentContestSaga() {
    yield all([
        takeLatest(ContestUpdatePageContentContestTypes.INIT, init),
        takeLatest(ContestUpdatePageContentContestTypes.SUBMIT, submit),
    ]);
}
