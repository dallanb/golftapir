import {
    ContestPageRoutes,
    ContestsCreatePageRoutes,
    ContestsPageRoutes,
    ContestUpdatePageRoutes,
    LeagueHomePageRoutes,
    LeaguePageRoutes,
    MemberPageRoutes,
    MembersPageRoutes,
    MembersCreatePageRoutes,
    MemberSettingsPageRoutes,
} from '@pages';

export const routes: any = [];

export const protectedRoutes: any = [
    ...LeagueHomePageRoutes,
    ...MembersPageRoutes,
    ...MembersCreatePageRoutes,
    ...MemberSettingsPageRoutes,
    ...MemberPageRoutes,
    ...LeaguePageRoutes,
    ...ContestsPageRoutes,
    ...ContestsCreatePageRoutes,
    ...ContestUpdatePageRoutes,
    ...ContestPageRoutes,
];
