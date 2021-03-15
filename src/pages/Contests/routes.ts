import Contests from './Contests';
import constantRoutes from '@constants/routes';
import constants from '@constants';

const routes = [
    {
        path: constantRoutes.ROUTES.CONTESTS.ROUTE,
        component: Contests,
        exact: true,
        role: constants.ROLE.ACTIVE,
    },
];

export default routes;
