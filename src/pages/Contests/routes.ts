import Contests from './Contests';
import constantRoutes from '@constants/routes';

const routes = [
    {
        path: constantRoutes.MEMBER_APP.CONTESTS.ROUTE,
        component: Contests,
        exact: true,
    },
];

export default routes;
