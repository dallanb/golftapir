import LeagueHome from './LeagueHome';
import constantRoutes from '@constants/routes';
import constants from '@constants';

const routes = [
    {
        path: constantRoutes.ROUTES.LEAGUE_HOME.ROUTE,
        component: LeagueHome,
        role: constants.ROLE.ACTIVE,
    },
];

export default routes;
