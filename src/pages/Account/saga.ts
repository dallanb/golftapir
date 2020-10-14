import { all, call, put, takeLatest } from 'redux-saga/effects';
import AccountPageActions, { AccountPageTypes } from './actions';
import { prepareInitialValues } from '@pages/Account/utils';
import { fetchMyAccount } from '@helpers';

function* init() {
    try {
        const { data } = yield call(fetchMyAccount);
        const updateFormInitialValues = prepareInitialValues(data);
        yield put(AccountPageActions.set({ data, updateFormInitialValues }));

        yield put(AccountPageActions.initSuccess());
    } catch (err) {
        yield put(AccountPageActions.initFailure(err));
    }
}

export default function* AccountPageSaga() {
    yield all([takeLatest(AccountPageTypes.INIT, init)]);
}
