import { ContestsPageRoutes } from '@pages/Contests';
import { ContestsCreatePageRoutes } from '@pages/ContestsCreate';
import { ContestPageRoutes } from '@pages/Contest';

export default [
    ...ContestsPageRoutes,
    ...ContestsCreatePageRoutes,
    ...ContestPageRoutes,
];
