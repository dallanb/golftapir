import {
    AccountPageRoutes,
    ContestPageRoutes,
    ContestsCreatePageRoutes,
    ContestsPageRoutes,
    HomePageRoutes,
    NotificationsPageRoutes,
} from '@pages';

export const routes: any = [];

export const protectedRoutes: any = [
    ...(AccountPageRoutes || []),
    ...ContestsPageRoutes,
    ...ContestsCreatePageRoutes,
    ...ContestPageRoutes,
    ...HomePageRoutes,
    ...NotificationsPageRoutes,
];
