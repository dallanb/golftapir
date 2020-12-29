import {
    AccountPageRoutes,
    CompetitorPageRoutes,
    CompetitorsPageRoutes,
    ContestPageRoutes,
    ContestsCreatePageRoutes,
    ContestUpdatePageRoutes,
    ContestsPageRoutes,
    HomePageRoutes,
    LeaguesPageRoutes,
    LeaguesCreatePageRoutes,
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
    ...LeaguesPageRoutes,
    ...LeaguesCreatePageRoutes,
    ...NotificationsPageRoutes,
    ...HomePageRoutes,
];
