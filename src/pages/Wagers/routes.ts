import Wagers from './Wagers';
import constants from '@constants';

const routes = [
    {
        path: constants.ROUTES.WAGERS,
        component: Wagers,
        exact: true,
    },
];

export default routes;
