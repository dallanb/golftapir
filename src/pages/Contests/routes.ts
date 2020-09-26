import Contests from './Contests';
import constants from '@constants';

const routes = [
    {
        path: constants.ROUTES.CONTEST,
        component: Contests,
        exact: true,
    },
];

export default routes;
