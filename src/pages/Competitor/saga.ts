import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { pick as _pick } from 'lodash';
import { fetchAccountMembership } from '@helpers';
import CompetitorPageActions, { CompetitorPageTypes } from './actions';

function* preInit({ data: account }: AnyAction) {
    yield put(CompetitorPageActions.set({ account }));
}

function* init({ uuid }: AnyAction) {
    try {
        const { data: account } = yield call(fetchAccountMembership, uuid);
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
