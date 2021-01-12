import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { createLogger } from 'redux-logger';
import { get as _get } from 'lodash';
import { reducer as leagueApp } from '@apps/LeagueApp/reducer';
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
    leagueHomePage,
    LeagueHomePageSaga,
    leaguePage,
    LeaguePageSaga,
    memberPage,
    MemberPageSaga,
    MemberPageContentMemberResultsSaga,
    MemberPageContentMemberInfoSaga,
    membersPage,
    MembersPageSaga,
    MembersPageContentMembersSaga,
    MembersPageSiderContentSearchSaga,
    memberSettingsPage,
    MemberSettingsPageSaga,
    MemberSettingsPageContentMemberSaga,
    LeagueHomePageSiderContentCalendarSaga,
} from '@pages';
import { default as BaseSaga } from '@apps/LeagueApp/saga';
import {
    AccountSaga,
    AuthSaga,
    ContestSaga,
    CourseSaga,
    LeagueSaga,
    MemberSaga,
    ModalSaga,
    NotificationSaga,
    ScoreSaga,
    SocketSaga,
    TopicSocketSaga,
} from '@sagas';

function configStore(options?: { preloadedState: any }): any {
    const middleware = [];
    const enhancers = [];
    let monitor = null;

    /* ------------- Assemble Middleware ------------- */
    monitor = (window as any).__SAGA_MONITOR_EXTENSION__;
    const loggerMiddleware = createLogger({
        collapsed: true,
    });
    middleware.push(loggerMiddleware);

    const sagaMiddleware = createSagaMiddleware({ sagaMonitor: monitor });
    middleware.push(sagaMiddleware);

    enhancers.push(applyMiddleware(...middleware));

    const store = createStore(
        combineReducers({
            base,
            auth,
            modal,
            notification,
            leagueApp,
            contestPage,
            contestsPage,
            contestsCreatePage,
            contestUpdatePage,
            leagueHomePage,
            leaguePage,
            memberPage,
            membersPage,
            memberSettingsPage,
        }),
        _get(options, ['preloadedState'], {}),
        compose(
            ...enhancers,
            (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
                (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    function* LeagueAppSaga() {
        yield all([
            fork(BaseSaga),
            fork(AccountSaga),
            fork(AuthSaga),
            fork(ContestSaga),
            fork(CourseSaga),
            fork(LeagueSaga),
            fork(MemberSaga),
            fork(ModalSaga),
            fork(NotificationSaga),
            fork(ScoreSaga),
            fork(SocketSaga),
            fork(TopicSocketSaga),
            fork(ContestPageSaga),
            fork(ContestPageContentContestLeaderboardSaga),
            fork(ContestLeaderboardScoreChannel),
            fork(ContestPageContentContestLeaderboardScorecardSaga),
            fork(ContestPageSiderContentCourseSaga),
            fork(ContestPageSiderContentParticipantActiveContestActiveSaga),
            fork(ContestPageSiderContentParticipantActiveContestPendingSaga),
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
            fork(LeagueHomePageSaga),
            fork(LeagueHomePageSiderContentCalendarSaga),
            fork(LeaguePageSaga),
            fork(MemberPageSaga),
            fork(MemberPageContentMemberResultsSaga),
            fork(MemberPageContentMemberInfoSaga),
            fork(MembersPageSaga),
            fork(MembersPageContentMembersSaga),
            fork(MembersPageSiderContentSearchSaga),
            fork(MemberSettingsPageSaga),
            fork(MemberSettingsPageContentMemberSaga),
        ]);
    }
    sagaMiddleware.run(LeagueAppSaga);

    return { store };
}

export default configStore;
