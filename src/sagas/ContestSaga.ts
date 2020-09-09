import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import ContestActions, { ContestTypes } from '../reducers/ContestReducer';
import { ContestService } from '../services';
import CONSTANTS from '../locale/en-CA';

function* fetchContest({ uuid }: AnyAction) {
    try {
        const res = yield call(ContestService.fetchContest, uuid);
        console.log(res);
        const { contests, _metadata: metadata } = res;
        yield put(ContestActions.fetchContestSuccess(contests, metadata));
    } catch (err) {
        yield put(ContestActions.fetchContestFailure(err));
        message.error(CONSTANTS.CONTEST.ERROR.FETCH);
    }
}
function* fetchContests() {
    try {
        const res = yield call(ContestService.fetchContests);
        console.log(res);
        const { contests, _metadata: metadata } = res;
        console.log(metadata);
        yield put(ContestActions.fetchContestsSuccess(contests, metadata));
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

export default function* ContestSaga() {
    yield all([
        takeLatest(ContestTypes.FETCH_CONTEST, fetchContest),
        takeLatest(ContestTypes.FETCH_CONTESTS, fetchContests),
        takeLatest(ContestTypes.CREATE_CONTEST, createContest),
    ]);
}
