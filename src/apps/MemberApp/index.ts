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
    competitorPage,
    competitorsPage,
    contestPage,
    contestMatchupPage,
    contestsPage,
    contestsCreatePage,
    contestUpdatePage,
    homePage,
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
    competitorPage,
    competitorsPage,
    contestPage,
    contestMatchupPage,
    contestsPage,
    contestsCreatePage,
    contestUpdatePage,
    homePage,
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
    CourseSaga,
    ModalSaga,
    NotificationSaga,
    ScoreSaga,
    SocketSaga,
    TopicSocketSaga,
    WagerSaga,
} from '@sagas';

import {
    AccountPageSaga,
    CompetitorPageSaga,
    CompetitorPageContentCompetitorResultsSaga,
    CompetitorsPageSaga,
    ContestPageSaga,
    ContestMatchupPageSaga,
    ContestsPageSaga,
    ContestsCreatePageSaga,
    ContestUpdatePageSaga,
    HomePageSaga,
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
        fork(CourseSaga),
        fork(ModalSaga),
        fork(NotificationSaga),
        fork(ScoreSaga),
        fork(SocketSaga),
        fork(TopicSocketSaga),
        fork(WagerSaga),
        fork(AccountPageSaga),
        fork(CompetitorPageSaga),
        fork(CompetitorPageContentCompetitorResultsSaga),
        fork(CompetitorsPageSaga),
        fork(ContestPageSaga),
        fork(ContestMatchupPageSaga),
        fork(ContestsPageSaga),
        fork(ContestsCreatePageSaga),
        fork(ContestUpdatePageSaga),
        fork(HomePageSaga),
        fork(LoginPageSaga),
        fork(LogoutPageSaga),
        fork(NotificationsPageSaga),
        fork(RegisterPageSaga),
        fork(WagersPageSaga),
    ]);
}
