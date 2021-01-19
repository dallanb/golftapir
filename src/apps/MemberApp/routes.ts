import {
    AccountPageRoutes,
    CompetitorPageRoutes,
    CompetitorsPageRoutes,
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
    ...LeaguesPageRoutes,
    ...LeaguesCreatePageRoutes,
    ...NotificationsPageRoutes,
    ...HomePageRoutes,
];
