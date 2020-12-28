import Leagues from './Leagues';
import constantRoutes from '@constants/routes';

const routes = [
    {
        path: constantRoutes.LEAGUES.ROUTE,
        component: Leagues,
        exact: true,
    },
];

export default routes;
