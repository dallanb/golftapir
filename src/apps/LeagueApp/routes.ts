import {
    ContestPageRoutes,
    ContestsCreatePageRoutes,
    ContestsPageRoutes,
    ContestUpdatePageRoutes,
    LeaguePageRoutes,
    MemberPageRoutes,
    MembersPageRoutes,
    MemberSettingsPageRoutes,
    HomePageRoutes,
} from '@pages';

export const routes: any = [];

export const protectedRoutes: any = [
    ...HomePageRoutes,
    ...MembersPageRoutes,
    ...MemberSettingsPageRoutes,
    ...MemberPageRoutes,
    ...LeaguePageRoutes,
    ...ContestsPageRoutes,
    ...ContestsCreatePageRoutes,
    ...ContestUpdatePageRoutes,
    ...ContestPageRoutes,
];
