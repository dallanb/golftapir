import LeaguesCreate from './LeaguesCreate';
import constantRoutes from '@constants/routes';

const routes = [
    {
        path: constantRoutes.MEMBER_APP.LEAGUES_CREATE.ROUTE,
        component: LeaguesCreate,
    },
];

export default routes;
