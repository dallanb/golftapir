import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AccountService } from '@services';
import CompetitorPageActions, { CompetitorPageTypes } from './actions';

function* preInit({ data: account }: AnyAction) {
    yield put(CompetitorPageActions.set({ account }));
}

function* init({ uuid }: AnyAction) {
    try {
        const { membership: account } = yield call(
            AccountService.fetchAccountMembership,
            uuid,
            {
                include: 'phone,address,avatar',
            }
        );
        yield put(CompetitorPageActions.set({ account }));
        yield put(CompetitorPageActions.initSuccess());
    } catch (err) {
        yield put(CompetitorPageActions.initFailure(err));
    }
}

export default function* CompetitorPageSaga() {
    yield all([
        takeLatest(CompetitorPageTypes.PRE_INIT, preInit),
        takeLatest(CompetitorPageTypes.INIT, init),
    ]);
}
