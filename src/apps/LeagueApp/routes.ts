import {
    ContestPageRoutes,
    ContestsCreatePageRoutes,
    ContestsPageRoutes,
    ContestUpdatePageRoutes,
    LeagueHomePageRoutes,
    LeaguePageRoutes,
    MemberPageRoutes,
    MembersPageRoutes,
    MemberSettingsPageRoutes,
} from '@pages';

export const routes: any = [];

export const protectedRoutes: any = [
    ...LeagueHomePageRoutes,
    ...MembersPageRoutes,
    ...MemberSettingsPageRoutes,
    ...MemberPageRoutes,
    ...LeaguePageRoutes,
    ...ContestsPageRoutes,
    ...ContestsCreatePageRoutes,
    ...ContestUpdatePageRoutes,
    ...ContestPageRoutes,
];
