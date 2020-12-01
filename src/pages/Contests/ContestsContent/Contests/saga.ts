import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import ContestsPageContentContestsActions, {
    ContestsPageContentContestsTypes,
} from './actions';
import { fetchContestsMaterialized } from '@helpers';
import { fetchContestsList } from './helpers';

function* init() {
    try {
        yield call(fetchContestsList);
        yield put(ContestsPageContentContestsActions.initSuccess());
    } catch (err) {
        yield put(ContestsPageContentContestsActions.initFailure());
    }
}

function* fetchData({ options = { page: 1, per_page: 10 } }: AnyAction) {
    try {
        const { data, metadata } = yield call(
            fetchContestsMaterialized,
            options
        );
        yield put(
            ContestsPageContentContestsActions.fetchDataSuccess(data, metadata)
        );
    } catch (err) {
        yield put(ContestsPageContentContestsActions.fetchDataFailure(err));
    }
}

export default function* ContestsPageContentContestsSaga() {
    yield all([
        takeLatest(ContestsPageContentContestsTypes.INIT, init),
        takeLatest(ContestsPageContentContestsTypes.FETCH_DATA, fetchData),
    ]);
}
