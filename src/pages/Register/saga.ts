import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { pick as _pick } from 'lodash';
import RegisterPageActions, { RegisterPageTypes } from './actions';
import { AuthService } from '@services';

function* init({ token }: AnyAction) {
    try {
        if (token) {
            const { invites: invite } = yield call(
                AuthService.fetchInvite,
                token
            );
            yield put(
                RegisterPageActions.setFormInitialValues(
                    _pick(invite, ['email', 'token'])
                )
            );
        }
        yield put(RegisterPageActions.initSuccess());
    } catch (err) {
        yield put(RegisterPageActions.initFailure(err));
    }
}

export default function* RegisterPageSaga() {
    yield all([takeLatest(RegisterPageTypes.INIT, init)]);
}
