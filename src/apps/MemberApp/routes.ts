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
    ...NotificationsPageRoutes,
    ...HomePageRoutes,
];
