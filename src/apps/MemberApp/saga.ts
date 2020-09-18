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

function* init() {
    try {
        const isLoggedIn = yield select(selectIsLoggedIn);
        if (!isLoggedIn) yield call(refresh);

        // move this stuff to its own generator (all occurences of this kind of stuff
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

        const { data: me } = success;
        yield put(BaseActions.set({ me }));

        yield put(BaseActions.initSuccess());
    } catch (err) {
        yield put(BaseActions.initFailure(err));
    }
}

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

export default function* BaseSaga() {
    yield all([takeLatest(BaseTypes.INIT, init)]);
}
