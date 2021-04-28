import constantRoutes from '@constants/routes';
import constants from '@constants';
import { ContestPageRoutes, ContestUpdatePageRoutes } from '@pages';
import Contest from './Contest';

export const contestRoutes = [...ContestUpdatePageRoutes, ...ContestPageRoutes];

const routes = [
    {
        path: constantRoutes.ROUTES.CONTEST.ROUTE,
        component: Contest,
        exact: false,
        role: constants.ROLE.ACTIVE,
    },
];

export default routes;
