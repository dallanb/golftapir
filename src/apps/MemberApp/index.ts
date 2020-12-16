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
    contestsPage,
    contestsCreatePage,
    contestUpdatePage,
    homePage,
    loginPage,
    registerPage,
    logoutPage,
    notificationsPage,
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
    contestsPage,
    contestsCreatePage,
    contestUpdatePage,
    homePage,
    loginPage,
    logoutPage,
    notificationsPage,
    registerPage,
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
} from '@sagas';

import {
    AccountPageSaga,
    AccountPageContentAccountSaga,
    CompetitorPageSaga,
    CompetitorPageContentCompetitorResultsSaga,
    CompetitorsPageSaga,
    CompetitorsPageContentCompetitorsSaga,
    ContestPageSaga,
    ContestPageContentContestLeaderboardSaga,
    ContestLeaderboardScoreChannel,
    ContestPageContentContestLeaderboardScorecardSaga,
    ContestPageSiderContentParticipantActiveContestActiveSaga,
    ContestPageSiderContentParticipantActiveContestPendingSaga,
    ContestsPageSaga,
    ContestsPageContentContestsSaga,
    ContestsPageSiderContentSearchSaga,
    ContestsCreatePageSaga,
    ContestsCreatePageContentContestSaga,
    ContestsCreatePageContentContestSearchCourseSaga,
    ContestsCreatePageContentContestSearchParticipantSaga,
    ContestUpdatePageSaga,
    ContestUpdatePageContentContestSaga,
    HomePageSaga,
    LoginPageSaga,
    LogoutPageSaga,
    NotificationsPageSaga,
    NotificationsPageContentNotificationsSaga,
    RegisterPageSaga,
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
        fork(AccountPageSaga),
        fork(AccountPageContentAccountSaga),
        fork(CompetitorPageSaga),
        fork(CompetitorPageContentCompetitorResultsSaga),
        fork(CompetitorsPageSaga),
        fork(CompetitorsPageContentCompetitorsSaga),
        fork(ContestPageSaga),
        fork(ContestPageContentContestLeaderboardSaga),
        fork(ContestLeaderboardScoreChannel),
        fork(ContestPageContentContestLeaderboardScorecardSaga),
        fork(ContestPageSiderContentParticipantActiveContestActiveSaga),
        fork(ContestPageSiderContentParticipantActiveContestPendingSaga),
        fork(ContestsPageSaga),
        fork(ContestsPageContentContestsSaga),
        fork(ContestsPageSiderContentSearchSaga),
        fork(ContestsCreatePageSaga),
        fork(ContestsCreatePageContentContestSaga),
        fork(ContestsCreatePageContentContestSearchCourseSaga),
        fork(ContestsCreatePageContentContestSearchParticipantSaga),
        fork(ContestUpdatePageSaga),
        fork(ContestUpdatePageContentContestSaga),
        fork(HomePageSaga),
        fork(LoginPageSaga),
        fork(LogoutPageSaga),
        fork(NotificationsPageSaga),
        fork(NotificationsPageContentNotificationsSaga),
        fork(RegisterPageSaga),
    ]);
}
