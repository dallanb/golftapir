import Leagues from './Leagues';
import constantRoutes from '@constants/routes';

const routes = [
    {
        path: constantRoutes.MEMBER_APP.LEAGUES.ROUTE,
        component: Leagues,
        exact: true,
    },
];

export default routes;
