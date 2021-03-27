import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { get as _get } from 'lodash';
import { reducer as app } from '@apps/LeagueApp/reducer';
import {
    authReducer as auth,
    baseReducer as base,
    modalReducer as modal,
    notificationReducer as notification,
} from '@reducers';
import {
    ContestLeaderboardScoreChannel,
    contestPage,
    ContestPageContentContestLeaderboardSaga,
    ContestPageContentContestLeaderboardScorecardSaga,
    ContestPageSaga,
    ContestPageSiderContentCourseSaga,
    ContestPageSiderContentParticipantActiveContestActiveSaga,
    ContestPageSiderContentParticipantActiveContestPendingSaga,
    ContestStrokeUpdateChannel,
    ContestPageSiderContentParticipantCompletedContestCompletedSaga,
    contestsCreatePage,
    ContestsCreatePageContentContestSaga,
    ContestsCreatePageContentContestSearchCourseSaga,
    ContestsCreatePageContentContestSearchParticipantSaga,
    ContestsCreatePageSaga,
    contestsPage,
    ContestsPageContentContestsSaga,
    ContestsPageSaga,
    ContestsPageSiderContentSearchSaga,
    contestUpdatePage,
    ContestUpdatePageContentContestSaga,
    ContestUpdatePageSaga,
    coursesCreatePage,
    CoursesCreatePageContentCourseSaga,
    CoursesCreatePageSaga,
    leagueHomePage,
    LeagueHomePageSaga,
    LeagueHomePageSiderMemberStatsSaga,
    LeagueHomePageContentMemberStandingsSaga,
    // LeagueHomePageSiderContentCalendarSaga,
    leaguePage,
    LeaguePageSaga,
    memberPage,
    MemberPageSaga,
    MemberPageContentMemberResultsSaga,
    MemberPageContentMemberInfoSaga,
    membersPage,
    MembersPageSaga,
    MembersPageContentMembersSaga,
    MembersPageSiderSearchSaga,
    MembersPageSiderInvitesSaga,
    membersCreatePage,
    MembersCreatePageSaga,
    MembersCreatePageContentMemberSaga,
    memberSettingsPage,
    MemberSettingsPageSaga,
    MemberSettingsPageContentMemberSaga,
} from '@pages';
import { default as LeagueAppSaga } from '@apps/LeagueApp/saga';
import {
    AccountSaga,
    AuthSaga,
    BaseSaga,
    ContestSaga,
    ContestTopicSocketSaga,
    CourseSaga,
    LeagueSaga,
    LeagueTopicSocketSaga,
    MemberSaga,
    ModalSaga,
    NotificationSaga,
    ScoreSaga,
    SocketSaga,
} from '@sagas';

function configStore(options?: { preloadedState: any }): any {
    const middleware = [];
    const enhancers = [];
    let monitor = undefined;

    /* ------------- Assemble Middleware ------------- */
    if (process.env.NODE_ENV === 'development') {
        monitor = (window as any).__SAGA_MONITOR_EXTENSION__;
        const loggerMiddleware = createLogger({
            collapsed: true,
        });
        middleware.push(loggerMiddleware);
    }

    const sagaMiddleware = createSagaMiddleware({ sagaMonitor: monitor });
    middleware.push(sagaMiddleware);

    enhancers.push(applyMiddleware(...middleware));

    const store = createStore(
        combineReducers({
            base,
            app,
            auth,
            modal,
            notification,
            contestPage,
            contestsPage,
            contestsCreatePage,
            contestUpdatePage,
            coursesCreatePage,
            leagueHomePage,
            leaguePage,
            memberPage,
            membersPage,
            membersCreatePage,
            memberSettingsPage,
        }),
        _get(options, ['preloadedState'], {}),
        composeWithDevTools(...enhancers)
    );

    function* AppSaga() {
        yield all([
            fork(BaseSaga),
            fork(LeagueAppSaga),
            fork(AccountSaga),
            fork(AuthSaga),
            fork(ContestSaga),
            fork(ContestTopicSocketSaga),
            fork(CourseSaga),
            fork(LeagueSaga),
            fork(LeagueTopicSocketSaga),
            fork(MemberSaga),
            fork(ModalSaga),
            fork(NotificationSaga),
            fork(ScoreSaga),
            fork(SocketSaga),
            fork(ContestPageSaga),
            fork(ContestPageContentContestLeaderboardSaga),
            fork(ContestLeaderboardScoreChannel),
            fork(ContestPageContentContestLeaderboardScorecardSaga),
            fork(ContestPageSiderContentCourseSaga),
            fork(ContestPageSiderContentParticipantActiveContestActiveSaga),
            fork(ContestPageSiderContentParticipantActiveContestPendingSaga),
            fork(ContestStrokeUpdateChannel),
            fork(
                ContestPageSiderContentParticipantCompletedContestCompletedSaga
            ),
            fork(ContestsPageSaga),
            fork(ContestsPageContentContestsSaga),
            fork(ContestsPageSiderContentSearchSaga),
            fork(ContestsCreatePageSaga),
            fork(ContestsCreatePageContentContestSaga),
            fork(ContestsCreatePageContentContestSearchCourseSaga),
            fork(ContestsCreatePageContentContestSearchParticipantSaga),
            fork(ContestUpdatePageSaga),
            fork(ContestUpdatePageContentContestSaga),
            fork(CoursesCreatePageSaga),
            fork(CoursesCreatePageContentCourseSaga),
            fork(LeagueHomePageSaga),
            fork(LeagueHomePageSiderMemberStatsSaga),
            fork(LeagueHomePageContentMemberStandingsSaga),
            // fork(LeagueHomePageSiderContentCalendarSaga),
            fork(LeaguePageSaga),
            fork(MemberPageSaga),
            fork(MemberPageContentMemberResultsSaga),
            fork(MemberPageContentMemberInfoSaga),
            fork(MembersPageSaga),
            fork(MembersPageContentMembersSaga),
            fork(MembersPageSiderSearchSaga),
            fork(MembersPageSiderInvitesSaga),
            fork(MembersCreatePageSaga),
            fork(MembersCreatePageContentMemberSaga),
            fork(MemberSettingsPageSaga),
            fork(MemberSettingsPageContentMemberSaga),
        ]);
    }
    sagaMiddleware.run(AppSaga);

    return { store };
}

export default configStore;
