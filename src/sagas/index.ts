import { all, fork } from 'redux-saga/effects';

/* ------------- Sagas ------------- */
import AccountSaga from './AccountSaga';
import AuthSaga from './AuthSaga';
import ContestSaga from './ContestSaga';
import ModalSaga from './ModalSaga';
import {
    AccountPageSaga,
    ContestPageSaga,
    ContestsPageSaga,
    ContestsCreatePageSaga,
    LoginPageSaga,
    RegisterPageSaga,
} from '@pages';

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
    yield all([
        fork(AccountSaga),
        fork(AuthSaga),
        fork(ContestSaga),
        fork(ModalSaga),
        fork(AccountPageSaga),
        fork(ContestPageSaga),
        fork(ContestsPageSaga),
        fork(ContestsCreatePageSaga),
        fork(LoginPageSaga),
        fork(RegisterPageSaga),
    ]);
}
