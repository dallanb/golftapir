import Competitors from './Competitors';
import constants from '@constants';

const routes = [
    {
        path: constants.ROUTES.COMPETITORS,
        component: Competitors,
        exact: true,
    },
];

export default routes;
