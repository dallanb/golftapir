import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import _ from 'lodash';
import ContestActions, { ContestTypes } from '@reducers/data/ContestReducer';
import { ContestService } from '@services';
import CONSTANTS from '@locale/en-CA';
import { selectData } from '@selectors/ContestSelectors';

function* fetchContest({ uuid, options }: AnyAction) {
    try {
        const res = yield call(ContestService.fetchContest, uuid, options);
        console.log(res);
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
        const data = append ? yield select(selectData) : [];
        yield put(
            ContestActions.fetchContestsSuccess(
                [...data, ...contests],
                metadata
            )
        );
    } catch (err) {
        yield put(ContestActions.fetchContestsFailure(err));
        message.error(CONSTANTS.CONTEST.ERROR.FETCH);
    }
}
function* createContest({ data }: any) {
    try {
        const res = yield call(ContestService.createContest, data);
        console.log(res);
        yield put(ContestActions.createContestSuccess());
        message.success(CONSTANTS.CONTEST.SUCCESS.CREATE);
    } catch (err) {
        yield put(ContestActions.createContestFailure(err));
        message.error(CONSTANTS.CONTEST.ERROR.CREATE);
    }
}

function* fetchContestParticipants({ uuid }: any) {
    try {
        const res = yield call(ContestService.fetchContest, uuid, {
            include: 'participants',
        });
        console.log(res);
        const participants = _.get(res, ['contests', 'participants'], []).map(
            ({ uuid }: { uuid: string }) => uuid
        );
        if (!participants.length) {
            yield put(
                ContestActions.fetchContestParticipantsSuccess(participants)
            );
        }
    } catch (err) {
        yield put(ContestActions.fetchContestParticipantsFailure(err));
        message.error(CONSTANTS.CONTEST.ERROR.FETCH_PARTICIPANTS);
    }
}

export default function* ContestSaga() {
    yield all([
        takeLatest(ContestTypes.FETCH_CONTEST, fetchContest),
        takeLatest(ContestTypes.FETCH_CONTESTS, fetchContests),
        takeLatest(ContestTypes.CREATE_CONTEST, createContest),
    ]);
}
