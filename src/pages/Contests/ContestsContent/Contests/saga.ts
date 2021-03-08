import { AnyAction } from 'redux';
import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import { ContestService } from '@services';
import ContestsPageContentContestsActions, {
    ContestsPageContentContestsTypes,
} from './actions';
import { fetchContestsList } from './helpers';

function* init({ options }: AnyAction) {
    try {
        yield call(fetchContestsList, { page: 1, per_page: 10, ...options });
        yield put(ContestsPageContentContestsActions.initSuccess());
    } catch (err) {
        yield put(ContestsPageContentContestsActions.initFailure(err.toJSON()));
    }
}

function* fetchData({ options = { page: 1, per_page: 10 } }: AnyAction) {
    try {
        const { contests, _metadata: metadata }: any = yield call(
            ContestService.fetchContestsMaterialized,
            options
        );
        yield put(
            ContestsPageContentContestsActions.fetchDataSuccess(
                contests,
                metadata
            )
        );
    } catch (err) {
        yield put(
            ContestsPageContentContestsActions.fetchDataFailure(err.toJSON())
        );
    }
}

export default function* ContestsPageContentContestsSaga() {
    yield all([
        takeLatest(ContestsPageContentContestsTypes.INIT, init),
        takeLatest(ContestsPageContentContestsTypes.FETCH_DATA, fetchData),
    ]);
}
