export { default } from './MemberApp';

// Reducer
import { reducer as base } from './reducer';
import { combineReducers } from 'redux';
/* ------------- Reducers ------------- */
import {
    authReducer as auth,
    modalReducer as modal,
    notificationReducer as notification,
} from '@reducers';
import {
    accountPage,
    contestPage,
    contestsPage,
    contestsCreatePage,
    loginPage,
    registerPage,
    logoutPage,
    notificationsPage,
    wagersPage,
} from '@pages';

export const memberAppReducer = combineReducers({
    base,
    auth,
    modal,
    notification,
    accountPage,
    contestPage,
    contestsPage,
    contestsCreatePage,
    loginPage,
    logoutPage,
    notificationsPage,
    registerPage,
    wagersPage,
});

// Saga
import { all, fork } from 'redux-saga/effects';
import {
    AccountSaga,
    AuthSaga,
    ContestSaga,
    ModalSaga,
    NotificationSaga,
    SocketSaga,
    WagerSaga,
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
    WagersPageSaga,
} from '@pages';
import { default as BaseSaga } from './saga';

export function* memberAppSaga() {
    yield all([
        fork(BaseSaga),
        fork(AccountSaga),
        fork(AuthSaga),
        fork(ContestSaga),
        fork(ModalSaga),
        fork(NotificationSaga),
        fork(SocketSaga),
        fork(WagerSaga),
        fork(AccountPageSaga),
        fork(ContestPageSaga),
        fork(ContestsPageSaga),
        fork(ContestsCreatePageSaga),
        fork(LoginPageSaga),
        fork(LogoutPageSaga),
        fork(NotificationsPageSaga),
        fork(RegisterPageSaga),
        fork(WagersPageSaga),
    ]);
}
