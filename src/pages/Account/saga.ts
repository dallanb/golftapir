import { all, call, put, takeLatest } from 'redux-saga/effects';
import AccountPageActions, { AccountPageTypes } from './actions';
import { AccountService } from '@services';

function* init() {
    try {
        const { accounts: account }: any = yield call(
            AccountService.fetchAccount,
            'me',
            {
                include: 'phone,address',
            }
        );
        yield put(AccountPageActions.set({ account }));

        yield put(AccountPageActions.initSuccess());
    } catch (err) {
        yield put(AccountPageActions.initFailure(err.toJSON()));
    }
}

export default function* AccountPageSaga() {
    yield all([takeLatest(AccountPageTypes.INIT, init)]);
}
