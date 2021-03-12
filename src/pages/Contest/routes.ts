import Contest from './Contest';
import constantRoutes from '@constants/routes';
import constants from '@constants';

const routes = [
    {
        path: constantRoutes.ROUTES.CONTEST.ROUTE,
        component: Contest,
        exact: true,
        role: constants.ROLE.ACTIVE,
    },
];

export default routes;
