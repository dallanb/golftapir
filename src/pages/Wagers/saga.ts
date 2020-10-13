import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchWagers } from '@helpers';
import WagersPageActions, { WagersPageTypes } from './actions';

function* init() {
    try {
        yield call(fetchWagers, {
            page: 1,
            per_page: 100,
        });
        yield put(WagersPageActions.initSuccess());
    } catch (err) {
        yield put(WagersPageActions.initFailure(err));
    }
}

export default function* WagersPageSaga() {
    yield all([takeLatest(WagersPageTypes.INIT, init)]);
}
