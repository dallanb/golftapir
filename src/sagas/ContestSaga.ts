import { AnyAction } from 'redux';
import {
    all,
    call,
    put,
    race,
    select,
    take,
    takeLatest,
} from 'redux-saga/effects';
import { message } from 'antd';
import _ from 'lodash';
import ContestActions, { ContestTypes } from '@reducers/ContestReducer';
import { ContestService } from '@services';
import CONSTANTS from '@locale/en-CA';
import { selectData } from '@selectors/ContestSelectors';
import { withTarget } from '@utils';

function* fetchContest({ uuid, options, target }: AnyAction) {
    try {
        const res = yield call(ContestService.fetchContest, uuid, options);
        const { contests, _metadata: metadata } = res;
        yield put(
            withTarget(ContestActions.fetchContestSuccess, target)(
                contests,
                metadata
            )
        );
    } catch (err) {
        yield put(withTarget(ContestActions.fetchContestFailure, target)(err));
        message.error(CONSTANTS.CONTEST.ERROR.FETCH);
    }
}
function* fetchContests({ options, append, target }: AnyAction) {
    try {
        const res = yield call(ContestService.fetchContests, options);
        const { contests, _metadata: metadata } = res;
        const data = append ? yield select(selectData) : [];
        yield put(
            withTarget(ContestActions.fetchContestsSuccess, target)(
                [...data, ...contests],
                metadata
            )
        );
    } catch (err) {
        yield put(withTarget(ContestActions.fetchContestsFailure, target)(err));
        message.error(CONSTANTS.CONTEST.ERROR.FETCH);
    }
}
function* createContest({ data, target }: any) {
    try {
        const res = yield call(ContestService.createContest, data);
        yield put(withTarget(ContestActions.createContestSuccess, target)());
        message.success(CONSTANTS.CONTEST.SUCCESS.CREATE);
    } catch (err) {
        yield put(withTarget(ContestActions.createContestFailure, target)(err));
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
