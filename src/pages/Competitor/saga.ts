import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchAccountMembership, fetchContestsMaterialized } from '@helpers';
import CompetitorPageActions, { CompetitorPageTypes } from './actions';

function* init({ uuid }: AnyAction) {
    try {
        const { data: account } = yield call(fetchAccountMembership, uuid);
        // TODO: move this to a fork helper
        const { data: contests } = yield call(fetchContestsMaterialized, {
            participants: uuid,
        });
        yield put(CompetitorPageActions.set({ account }));
        yield put(CompetitorPageActions.set({ contests }));
        yield put(CompetitorPageActions.initSuccess());
    } catch (err) {
        yield put(CompetitorPageActions.initFailure());
    }
}

export default function* CompetitorPageSaga() {
    yield all([takeLatest(CompetitorPageTypes.INIT, init)]);
}
