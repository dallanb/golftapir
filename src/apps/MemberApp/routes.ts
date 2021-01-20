import {
    AccountPageRoutes,
    HomePageRoutes,
    LeaguesCreatePageRoutes,
    NotificationsPageRoutes,
} from '@pages';

export const routes: any = [];

export const protectedRoutes: any = [
    ...(AccountPageRoutes || []),
    ...LeaguesCreatePageRoutes,
    ...NotificationsPageRoutes,
    ...HomePageRoutes,
];
