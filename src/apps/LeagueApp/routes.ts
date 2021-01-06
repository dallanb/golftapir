import {
    ContestPageRoutes,
    ContestsCreatePageRoutes,
    ContestsPageRoutes,
    ContestUpdatePageRoutes,
    LeaguePageRoutes,
    MembersPageRoutes,
    MemberSettingsPageRoutes,
} from '@pages';

export const routes: any = [];

export const protectedRoutes: any = [
    ...MemberSettingsPageRoutes,
    ...MembersPageRoutes,
    ...LeaguePageRoutes,
    ...ContestsPageRoutes,
    ...ContestsCreatePageRoutes,
    ...ContestUpdatePageRoutes,
    ...ContestPageRoutes,
];
