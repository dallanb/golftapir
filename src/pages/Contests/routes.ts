import Contests from './Contests';
import constants from '@constants';

const routes = [
    {
        path: constants.ROUTES.CONTESTS,
        component: Contests,
        exact: true,
    },
];

export default routes;
