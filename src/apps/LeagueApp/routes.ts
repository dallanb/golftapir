import {
    ContestsCreatePageRoutes,
    ContestsPageRoutes,
    CoursesCreatePageRoutes,
    LeagueHomePageRoutes,
    LeaguePageRoutes,
    MemberPageRoutes,
    MembersPageRoutes,
    MembersCreatePageRoutes,
    MemberSettingsPageRoutes,
} from '@pages';
import { ContestModuleRoutes } from '@modules';

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
    ...CoursesCreatePageRoutes,
    ...ContestModuleRoutes,
];
