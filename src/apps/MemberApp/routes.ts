import {
    AccountPageRoutes,
    CompetitorPageRoutes,
    CompetitorsPageRoutes,
    ContestPageRoutes,
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
    ...ContestPageRoutes,
    ...HomePageRoutes,
    ...NotificationsPageRoutes,
    ...WagersPageRoutes,
];
