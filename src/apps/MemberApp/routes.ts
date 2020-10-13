import {
    AccountPageRoutes,
    ContestPageRoutes,
    ContestsCreatePageRoutes,
    ContestsUpdatePageRoutes,
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
    ...ContestsUpdatePageRoutes,
    ...ContestPageRoutes,
    ...HomePageRoutes,
    ...NotificationsPageRoutes,
    ...WagersPageRoutes,
];
