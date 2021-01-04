import LeagueMembers from './LeagueMembers';
import constantRoutes from '@constants/routes';

const routes = [
    {
        path: constantRoutes.LEAGUE_APP.MEMBERS.ROUTE,
        component: LeagueMembers,
    },
];

export default routes;
