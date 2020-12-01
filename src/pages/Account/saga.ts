import { all, call, put, takeLatest } from 'redux-saga/effects';
import AccountPageActions, { AccountPageTypes } from './actions';
import { fetchMyAccount } from '@helpers';

function* init() {
    try {
        const { data: account } = yield call(fetchMyAccount);
        yield put(AccountPageActions.set({ account }));

        yield put(AccountPageActions.initSuccess());
    } catch (err) {
        yield put(AccountPageActions.initFailure(err));
    }
}

export default function* AccountPageSaga() {
    yield all([takeLatest(AccountPageTypes.INIT, init)]);
}
