import {
    ContestPageRoutes,
    ContestsCreatePageRoutes,
    ContestsPageRoutes,
    ContestUpdatePageRoutes,
    LeagueMembersPageRoutes,
    LeaguePageRoutes,
} from '@pages';

export const routes: any = [];

export const protectedRoutes: any = [
    ...LeagueMembersPageRoutes,
    ...LeaguePageRoutes,
    ...ContestsPageRoutes,
    ...ContestsCreatePageRoutes,
    ...ContestUpdatePageRoutes,
    ...ContestPageRoutes,
];
