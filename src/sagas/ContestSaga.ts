import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import ContestActions, { ContestTypes } from '../reducers/ContestReducer';
import { ContestService } from '../services';

function* fetchContest({ uuid }: AnyAction) {
    try {
        const res = yield call(ContestService.fetchContest, uuid);
        console.log(res);
        const { accounts } = res;
        yield put(ContestActions.fetchContestSuccess(accounts));
    } catch (err) {
        yield put(ContestActions.fetchContestFailure(err));
        message.error('Error fetching Contest information');
    }
}

export default function* ContestSaga() {
    yield all([takeLatest(ContestTypes.FETCH_CONTEST, fetchContest)]);
}
