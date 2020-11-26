import Contest from './Contest';
import constants from '@constants';

const routes = [
    {
        path: constants.ROUTES.CONTEST,
        component: Contest,
        exact: true,
    },
];

export default routes;
