export {
    default as Account,
    reducer as accountPage,
    AccountPageSaga,
    AccountPageContentAccountSaga,
    AccountPageRoutes,
} from './Account';

export {
    default as Contest,
    reducer as contestPage,
    ContestPageSaga,
    ContestPageContentContestLeaderboardSaga,
    ContestLeaderboardScoreChannel,
    ContestPageContentContestLeaderboardScorecardSaga,
    ContestPageSiderContentCourseSaga,
    ContestPageSiderContentParticipantActiveContestActiveSaga,
    ContestPageSiderContentParticipantActiveContestPendingSaga,
    ContestStrokeUpdateChannel,
    ContestPageSiderContentParticipantCompletedContestCompletedSaga,
    ContestPageRoutes,
} from './Contest';
export {
    default as Contests,
    reducer as contestsPage,
    ContestsPageSaga,
    ContestsPageContentContestsSaga,
    ContestsPageSiderContentSearchSaga,
    ContestsPageRoutes,
} from './Contests';
export {
    default as ContestsCreate,
    reducer as contestsCreatePage,
    ContestsCreatePageSaga,
    ContestsCreatePageContentContestSaga,
    ContestsCreatePageContentContestSearchCourseSaga,
    ContestsCreatePageContentContestSearchParticipantSaga,
    ContestsCreatePageRoutes,
} from './ContestsCreate';
export {
    default as ContestUpdate,
    reducer as contestUpdatePage,
    ContestUpdatePageSaga,
    ContestUpdatePageContentContestSaga,
    ContestUpdatePageRoutes,
} from './ContestUpdate';
export {
    default as ForgotPassword,
    reducer as forgotPasswordPage,
    ForgotPasswordPageSaga,
    ForgotPasswordPageRoutes,
} from './ForgotPassword';
export {
    default as Home,
    reducer as homePage,
    HomePageSaga,
    // HomePageSiderContentCalendarSaga,
    HomePageRoutes,
} from './Home';
export {
    default as LeagueHome,
    reducer as leagueHomePage,
    LeagueHomePageSaga,
    LeagueHomePageSiderContentMemberStatsSaga,
    LeagueHomePageContentMemberStandingsSaga,
    LeagueHomePageSiderContentCalendarSaga,
    LeagueHomePageRoutes,
} from './LeagueHome';
export {
    default as League,
    reducer as leaguePage,
    LeaguePageSaga,
    LeaguePageRoutes,
} from './League';
export {
    default as Leagues,
    reducer as leaguesPage,
    LeaguesPageSaga,
    LeaguesPageContentLeaguesSaga,
    LeaguesPageSiderContentSearchSaga,
    LeaguesPageRoutes,
} from './Leagues';
export {
    default as LeaguesCreate,
    reducer as leaguesCreatePage,
    LeaguesCreatePageSaga,
    LeaguesCreatePageContentLeagueSaga,
    // LeaguesCreatePageContentLeagueSearchMemberSaga,
    LeaguesCreatePageRoutes,
} from './LeaguesCreate';
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
    default as MemberSettings,
    reducer as memberSettingsPage,
    MemberSettingsPageSaga,
    MemberSettingsPageContentMemberSaga,
    MemberSettingsPageRoutes,
} from './MemberSettings';
export {
    default as Member,
    reducer as memberPage,
    MemberPageSaga,
    MemberPageContentMemberResultsSaga,
    MemberPageContentMemberInfoSaga,
    MemberPageRoutes,
} from './Member';
export {
    default as Members,
    reducer as membersPage,
    MembersPageSaga,
    MembersPageContentMembersSaga,
    MembersPageSiderContentSearchSaga,
    MembersPageSiderContentInvitesSaga,
    MembersPageRoutes,
} from './Members';
export {
    default as MembersCreate,
    reducer as membersCreatePage,
    MembersCreatePageSaga,
    MembersCreatePageContentMemberSaga,
    MembersCreatePageRoutes,
} from './MembersCreate';
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
    default as ResetPassword,
    reducer as resetPasswordPage,
    ResetPasswordPageSaga,
    ResetPasswordPageRoutes,
} from './ResetPassword';
export {
    default as Verify,
    reducer as verifyPage,
    VerifyPageSaga,
    VerifyPageRoutes,
} from './Verify';
