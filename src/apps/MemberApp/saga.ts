import {
    all,
    delay,
    put,
    race,
    select,
    take,
    takeLatest,
} from 'redux-saga/effects';
import BaseActions, { BaseTypes } from './actions';
import { AccountActions, AuthActions, AuthTypes } from '@actions';
import { selectIsLoggedIn } from '@selectors/AuthSelectors';

function* init() {
    try {
        const isLoggedIn = yield select(selectIsLoggedIn);
        if (!isLoggedIn) {
            yield put(AuthActions.refresh());
        }

        const { timeout } = yield race({
            success: take(AuthTypes.REFRESH_SUCCESS),
            timeout: delay(1000),
        });

        if (timeout) {
            yield put(AuthActions.refreshFailure());
            throw new Error('refresh timeout');
        }

        yield put(
            AccountActions.fetchAccount('me', {
                include: 'avatar',
            })
        );
        yield put(BaseActions.initSuccess());
    } catch (err) {
        yield put(BaseActions.initFailure(err));
    }
}

export default function* BaseSaga() {
    yield all([takeLatest(BaseTypes.INIT, init)]);
}
