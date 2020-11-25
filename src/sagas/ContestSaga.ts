import { AnyAction } from 'redux';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
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

function* fetchContests({ options, append }: AnyAction) {
    try {
        const res = yield call(ContestService.fetchContests, options);
        const { contests, _metadata: metadata } = res;
        yield put(
            ContestActions.fetchContestsSuccess(contests, metadata, append)
        );
    } catch (err) {
        yield put(ContestActions.fetchContestsFailure(err));
        message.error(CONSTANTS.CONTEST.ERROR.FETCH);
    }
}

function* fetchContestMaterialized({ uuid, options }: AnyAction) {
    try {
        const res = yield call(
            ContestService.fetchContestMaterialized,
            uuid,
            options
        );
        const { contests, _metadata: metadata } = res;
        yield put(
            ContestActions.fetchContestMaterializedSuccess(contests, metadata)
        );
    } catch (err) {
        yield put(ContestActions.fetchContestMaterializedFailure(err));
        message.error(CONSTANTS.CONTEST.ERROR.FETCH);
    }
}

function* fetchContestsMaterialized({ options, append }: AnyAction) {
    try {
        const res = yield call(
            ContestService.fetchContestsMaterialized,
            options
        );
        const { contests, _metadata: metadata } = res;
        yield put(
            ContestActions.fetchContestsMaterializedSuccess(
                contests,
                metadata,
                append
            )
        );
    } catch (err) {
        yield put(ContestActions.fetchContestsMaterializedFailure(err));
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
        yield fork(ContestService.assignAvatar, uuid, avatar);
        yield put(ContestActions.assignAvatarSuccess());
    } catch (err) {
        yield put(ContestActions.assignAvatarFailure(err));
        message.error(CONSTANTS.ACCOUNT.ERROR.ASSIGN_AVATAR);
    }
}

function* fetchContestParticipantUser({ contest_uuid, user_uuid }: any) {
    try {
        const res = yield call(
            ContestService.fetchContestParticipantUser,
            contest_uuid,
            user_uuid
        );
        const { participants } = res;
        yield put(
            ContestActions.fetchContestParticipantUserSuccess(participants)
        );
    } catch (err) {
        yield put(ContestActions.fetchContestParticipantUserFailure(err));
        message.error(CONSTANTS.CONTEST.ERROR.FETCH_PARTICIPANT);
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
function* fetchContestParticipants({ uuid, options }: any) {
    try {
        const res = yield call(
            ContestService.fetchContestParticipants,
            uuid,
            options
        );
        const { participants } = res;
        yield put(ContestActions.fetchContestParticipantsSuccess(participants));
    } catch (err) {
        yield put(ContestActions.updateContestParticipantFailure(err));
        message.error(CONSTANTS.CONTEST.ERROR.FETCH_PARTICIPANTS);
    }
}

export default function* ContestSaga() {
    yield all([
        takeLatest(ContestTypes.FETCH_CONTEST, fetchContest),
        takeLatest(ContestTypes.FETCH_CONTESTS, fetchContests),
        takeLatest(
            ContestTypes.FETCH_CONTEST_MATERIALIZED,
            fetchContestMaterialized
        ),
        takeLatest(
            ContestTypes.FETCH_CONTESTS_MATERIALIZED,
            fetchContestsMaterialized
        ),
        takeLatest(ContestTypes.CREATE_CONTEST, createContest),
        takeLatest(ContestTypes.UPDATE_CONTEST, updateContest),
        takeLatest(ContestTypes.ASSIGN_AVATAR, assignAvatar),
        takeLatest(
            ContestTypes.FETCH_CONTEST_PARTICIPANT_USER,
            fetchContestParticipantUser
        ),
        takeLatest(
            ContestTypes.UPDATE_CONTEST_PARTICIPANT,
            updateContestParticipant
        ),
        takeLatest(
            ContestTypes.FETCH_CONTEST_PARTICIPANTS,
            fetchContestParticipants
        ),
    ]);
}
