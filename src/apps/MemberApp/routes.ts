import {
    AccountPageRoutes,
    ContestPageRoutes,
    ContestsCreatePageRoutes,
    ContestsPageRoutes,
    HomePageRoutes,
    NotificationsPageRoutes,
    WagersPageRoutes,
} from '@pages';

export const routes: any = [];

export const protectedRoutes: any = [
    ...(AccountPageRoutes || []),
    ...ContestsPageRoutes,
    ...ContestsCreatePageRoutes,
    ...ContestPageRoutes,
    ...HomePageRoutes,
    ...NotificationsPageRoutes,
    ...WagersPageRoutes,
];
