import Competitors from './Competitors';
import constants from '@constants';

const routes = [
    {
        path: constants.ROUTES.COMPETITORS.ROUTE,
        component: Competitors,
        exact: true,
    },
];

export default routes;
