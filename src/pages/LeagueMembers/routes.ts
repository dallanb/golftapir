import LeagueMembers from './LeagueMembers';
import constantRoutes from '@constants/routes';

const routes = [
    {
        path: constantRoutes.ROUTES.MEMBERS.ROUTE,
        component: LeagueMembers,
    },
];

export default routes;
