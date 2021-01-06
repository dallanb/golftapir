import {
    ContestPageRoutes,
    ContestsCreatePageRoutes,
    ContestsPageRoutes,
    ContestUpdatePageRoutes,
    LeagueMembersPageRoutes,
    LeaguePageRoutes,
    MemberSettingsPageRoutes,
} from '@pages';

export const routes: any = [];

export const protectedRoutes: any = [
    ...MemberSettingsPageRoutes,
    ...LeagueMembersPageRoutes,
    ...LeaguePageRoutes,
    ...ContestsPageRoutes,
    ...ContestsCreatePageRoutes,
    ...ContestUpdatePageRoutes,
    ...ContestPageRoutes,
];
