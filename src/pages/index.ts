export {
    default as Account,
    reducer as accountPage,
    AccountPageSaga,
    AccountPageContentAccountSaga,
    AccountPageRoutes,
} from './Account';

export {
    default as Competitor,
    reducer as competitorPage,
    CompetitorPageSaga,
    CompetitorPageContentCompetitorResultsSaga,
    CompetitorPageRoutes,
} from './Competitor';

export {
    default as Competitors,
    reducer as competitorsPage,
    CompetitorsPageSaga,
    CompetitorsPageContentCompetitorsSaga,
    CompetitorsPageRoutes,
} from './Competitors';
export {
    default as Contest,
    reducer as contestPage,
    ContestPageSaga,
    ContestPageSiderContentParticipantActiveContestActiveSaga,
    ContestPageSiderContentParticipantActiveContestPendingSaga,
    ContestPageRoutes,
} from './Contest';
export {
    default as ContestMatchup,
    reducer as contestMatchupPage,
    ContestMatchupPageSaga,
    ContestMatchupPageRoutes,
} from './ContestMatchup';
export {
    default as Contests,
    reducer as contestsPage,
    ContestsPageSaga,
    ContestsPageContentContestsSaga,
    ContestsPageRoutes,
} from './Contests';
export {
    default as ContestsCreate,
    reducer as contestsCreatePage,
    ContestsCreatePageSaga,
    ContestsCreatePageRoutes,
} from './ContestsCreate';
export {
    default as ContestUpdate,
    reducer as contestUpdatePage,
    ContestUpdatePageSaga,
    ContestUpdatePageRoutes,
} from './ContestUpdate';
export {
    default as Home,
    reducer as homePage,
    HomePageSaga,
    HomePageRoutes,
} from './Home';
export {
    default as Login,
    reducer as loginPage,
    LoginPageSaga,
    LoginPageRoutes,
} from './Login';
export {
    default as Logout,
    reducer as logoutPage,
    LogoutPageSaga,
    LogoutPageRoutes,
} from './Logout';
export {
    default as Notifications,
    reducer as notificationsPage,
    NotificationsPageSaga,
    NotificationsPageContentNotificationsSaga,
    NotificationsPageRoutes,
} from './Notifications';
export {
    default as Register,
    reducer as registerPage,
    RegisterPageSaga,
    RegisterPageRoutes,
} from './Register';
export {
    default as Wagers,
    reducer as wagersPage,
    WagersPageSaga,
    WagersPageRoutes,
} from './Wagers';
