import { AnyAction } from 'redux';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { fetchAccountMembership, fetchContestsMaterialized } from '@helpers';
import CompetitorPageActions, { CompetitorPageTypes } from './actions';

function* preInit({ data }: AnyAction) {
    console.log(data);
}

function* init({ uuid }: AnyAction) {
    try {
        const { data: account } = yield call(fetchAccountMembership, uuid);
        // TODO: move this to a fork helper
        yield fork(fetchContestsMaterialized, {
            page: 1,
            per_page: 3,
            participants: uuid,
            sort_by: 'mtime.desc',
        });
        yield put(CompetitorPageActions.set({ account }));
        yield put(CompetitorPageActions.initSuccess());
    } catch (err) {
        yield put(CompetitorPageActions.initFailure());
    }
}

export default function* CompetitorPageSaga() {
    yield all([
        takeLatest(CompetitorPageTypes.PRE_INIT, preInit),
        takeLatest(CompetitorPageTypes.INIT, init),
    ]);
}
