import Contest from './Contest';
import constantRoutes from '@constants/routes';

const routes = [
    {
        path: constantRoutes.ROUTES.CONTEST.ROUTE,
        component: Contest,
        exact: true,
    },
];

export default routes;
