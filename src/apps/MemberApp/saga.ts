import {
    all,
    call,
    delay,
    put,
    race,
    select,
    take,
    takeLatest,
} from 'redux-saga/effects';
import BaseActions, { BaseTypes } from './actions';
import { AccountActions, AccountTypes, AuthActions, AuthTypes } from '@actions';
import { selectIsLoggedIn } from '@selectors/AuthSelectors';

// Action Handlers
function* init() {
    try {
        const isLoggedIn = yield select(selectIsLoggedIn);
        if (!isLoggedIn) yield call(refresh);

        const { data: me } = yield call(fetchAccount);
        yield put(BaseActions.set({ me }));

        yield put(BaseActions.initSuccess());
    } catch (err) {
        yield put(BaseActions.initFailure(err));
    }
}

// Helpers
function* refresh() {
    yield put(AuthActions.refresh());
    const { failure, timeout } = yield race({
        success: take(AuthTypes.REFRESH_SUCCESS),
        failure: take(AuthTypes.REFRESH_FAILURE),
        timeout: delay(5000),
    });
    if (timeout) {
        yield put(AuthActions.refreshFailure());
        throw new Error('refresh timeout');
    }
    if (failure) {
        yield put(AuthActions.refreshFailure());
        throw new Error('refresh failure');
    }
}

function* fetchAccount() {
    yield put(
        AccountActions.fetchAccount('me', {
            include: 'avatar',
        })
    );
    const { success, failure } = yield race({
        success: take(AccountTypes.FETCH_ACCOUNT_SUCCESS),
        failure: take(AccountTypes.FETCH_ACCOUNT_FAILURE),
    });

    if (failure) {
        throw new Error(failure);
    }

    return success;
}

export default function* BaseSaga() {
    yield all([takeLatest(BaseTypes.INIT, init)]);
}
