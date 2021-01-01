import { LeagueMembersPageRoutes, LeaguePageRoutes } from '@pages';

export const routes: any = [];

export const protectedRoutes: any = [
    ...LeagueMembersPageRoutes,
    ...LeaguePageRoutes,
];
