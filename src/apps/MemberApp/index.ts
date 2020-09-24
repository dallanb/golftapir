import NotificationSaga from '@sagas/NotificationSaga';

export { default } from './MemberApp';

// Reducer
import { reducer as base } from './reducer';
import { combineReducers } from 'redux';
/* ------------- Reducers ------------- */
import { authReducer as auth, modalReducer as modal } from '@reducers';
import {
    accountPage,
    contestPage,
    contestsPage,
    contestsCreatePage,
    loginPage,
    registerPage,
    logoutPage,
} from '@pages';

export const memberAppReducer = combineReducers({
    base,
    accountPage,
    auth,
    contestPage,
    contestsPage,
    contestsCreatePage,
    loginPage,
    logoutPage,
    registerPage,
    modal,
});

// Saga
import { all, fork } from 'redux-saga/effects';
import { AccountSaga, AuthSaga, ContestSaga, ModalSaga } from '@sagas';
import {
    AccountPageSaga,
    ContestPageSaga,
    ContestsPageSaga,
    ContestsCreatePageSaga,
    LoginPageSaga,
    LogoutPageSaga,
    RegisterPageSaga,
} from '@pages';
import { default as BaseSaga } from './saga';

export function* memberAppSaga() {
    yield all([
        fork(BaseSaga),
        fork(AccountSaga),
        fork(AuthSaga),
        fork(ContestSaga),
        fork(ModalSaga),
        fork(AccountPageSaga),
        fork(ContestPageSaga),
        fork(ContestsPageSaga),
        fork(ContestsCreatePageSaga),
        fork(LoginPageSaga),
        fork(LogoutPageSaga),
        fork(NotificationSaga),
        fork(RegisterPageSaga),
    ]);
}
