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
        const { accounts } = res;
        yield put(ContestActions.fetchContestSuccess(accounts));
    } catch (err) {
        yield put(ContestActions.fetchContestFailure(err));
        message.error(CONSTANTS.CONTEST.ERROR.FETCH);
    }
}
function* fetchContests() {
    try {
        const res = yield call(ContestService.fetchContests);
        console.log(res);
        const { accounts } = res;
        yield put(ContestActions.fetchContestsSuccess(accounts));
    } catch (err) {
        yield put(ContestActions.fetchContestsFailure(err));
        message.error(CONSTANTS.CONTEST.ERROR.FETCH);
    }
}

export default function* ContestSaga() {
    yield all([
        takeLatest(ContestTypes.FETCH_CONTEST, fetchContest),
        takeLatest(ContestTypes.FETCH_CONTESTS, fetchContests),
    ]);
}
