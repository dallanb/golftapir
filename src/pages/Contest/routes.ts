import Contest from './Contest';
import constants from '@constants';

const routes = [
    {
        path: constants.ROUTES.CONTEST.ROUTE,
        component: Contest,
        exact: true,
    },
];

export default routes;
