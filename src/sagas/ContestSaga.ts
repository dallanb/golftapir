import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import ContestActions, { ContestTypes } from '@actions/ContestActions';
import { ContestService } from '@services';
import CONSTANTS from '@locale/en-CA';
import AccountActions from '@actions/AccountActions';
import { assignContestAvatar } from '@helpers';

function* fetchContest({ uuid, options }: AnyAction) {
    try {
        const res = yield call(ContestService.fetchContest, uuid, options);
        const { contests, _metadata: metadata } = res;
        yield put(ContestActions.fetchContestSuccess(contests, metadata));
    } catch (err) {
        yield put(ContestActions.fetchContestFailure(err));
        message.error(CONSTANTS.CONTEST.ERROR.FETCH);
    }
}

function* fetchContests({ options }: AnyAction) {
    try {
        const res = yield call(ContestService.fetchContests, options);
        const { contests, _metadata: metadata } = res;
        yield put(ContestActions.fetchContestsSuccess(contests, metadata));
    } catch (err) {
        yield put(ContestActions.fetchContestsFailure(err));
        message.error(CONSTANTS.CONTEST.ERROR.FETCH);
    }
}

function* createContest({ data }: AnyAction) {
    try {
        const res = yield call(ContestService.createContest, data);
        const { contests } = res;

        yield put(ContestActions.createContestSuccess(contests));
        message.success(CONSTANTS.CONTEST.SUCCESS.CREATE);
    } catch (err) {
        yield put(ContestActions.createContestFailure(err));
        message.error(CONSTANTS.CONTEST.ERROR.CREATE);
    }
}

function* updateContest({ uuid, data }: AnyAction) {
    try {
        const res = yield call(ContestService.updateContest, uuid, data);
        const { contests } = res;
        yield put(ContestActions.updateContestSuccess(contests));
        message.success(CONSTANTS.CONTEST.SUCCESS.UPDATE);
    } catch (err) {
        yield put(ContestActions.updateContestFailure(err));
        message.error(CONSTANTS.CONTEST.ERROR.UPDATE);
    }
}

function* assignAvatar({ uuid, avatar }: AnyAction) {
    try {
        const res = yield call(ContestService.assignAvatar, uuid, avatar);
        // const { accounts } = res;
        console.log(res);
        yield put(ContestActions.assignAvatarSuccess());
    } catch (err) {
        yield put(ContestActions.assignAvatarFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.ASSIGN_AVATAR);
    }
}

function* updateContestParticipant({ uuid, data }: any) {
    try {
        const res = yield call(
            ContestService.updateContestParticipant,
            uuid,
            data
        );
        const { participants } = res;
        yield put(ContestActions.updateContestParticipantSuccess(participants));
        message.success(CONSTANTS.CONTEST.SUCCESS.UPDATE_PARTICIPANT);
    } catch (err) {
        yield put(ContestActions.updateContestParticipantFailure(err));
        message.error(CONSTANTS.CONTEST.ERROR.UPDATE_PARTICIPANT);
    }
}

export default function* ContestSaga() {
    yield all([
        takeLatest(ContestTypes.FETCH_CONTEST, fetchContest),
        takeLatest(ContestTypes.FETCH_CONTESTS, fetchContests),
        takeLatest(ContestTypes.CREATE_CONTEST, createContest),
        takeLatest(ContestTypes.UPDATE_CONTEST, updateContest),
        takeLatest(ContestTypes.ASSIGN_AVATAR, assignAvatar),
        takeLatest(
            ContestTypes.UPDATE_CONTEST_PARTICIPANT,
            updateContestParticipant
        ),
    ]);
}
