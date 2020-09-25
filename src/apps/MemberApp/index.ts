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
    notificationsPage,
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
    notificationsPage,
    registerPage,
    modal,
});

// Saga
import { all, fork } from 'redux-saga/effects';
import {
    AccountSaga,
    AuthSaga,
    ContestSaga,
    ModalSaga,
    NotificationSaga,
} from '@sagas';

import {
    AccountPageSaga,
    ContestPageSaga,
    ContestsPageSaga,
    ContestsCreatePageSaga,
    LoginPageSaga,
    LogoutPageSaga,
    NotificationsPageSaga,
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
        fork(NotificationsPageSaga),
        fork(NotificationSaga),
        fork(RegisterPageSaga),
    ]);
}
