import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import ContestActions, { ContestTypes } from '@actions/ContestActions';
import { ContestService } from '@services';
import CONSTANTS from '@locale/en-CA';
import { selectData } from '@selectors/ContestSelectors';

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
        yield call(ContestService.createContest, data);
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
