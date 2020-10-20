import {
    AccountPageRoutes,
    CompetitorPageRoutes,
    CompetitorsPageRoutes,
    ContestPageRoutes,
    ContestMatchupPageRoutes,
    ContestsCreatePageRoutes,
    ContestUpdatePageRoutes,
    ContestsPageRoutes,
    HomePageRoutes,
    NotificationsPageRoutes,
    WagersPageRoutes,
} from '@pages';

export const routes: any = [];

export const protectedRoutes: any = [
    ...(AccountPageRoutes || []),
    ...CompetitorsPageRoutes,
    ...CompetitorPageRoutes,
    ...ContestsPageRoutes,
    ...ContestsCreatePageRoutes,
    ...ContestUpdatePageRoutes,
    ...ContestMatchupPageRoutes,
    ...ContestPageRoutes,
    ...HomePageRoutes,
    ...NotificationsPageRoutes,
    ...WagersPageRoutes,
];
