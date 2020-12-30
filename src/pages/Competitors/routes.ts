import Competitors from './Competitors';
import constantRoutes from '@constants/routes';

const routes = [
    {
        path: constantRoutes.MEMBER_APP.COMPETITORS.ROUTE,
        component: Competitors,
        exact: true,
    },
];

export default routes;
