import Competitors from './Competitors';
import constantRoutes from '@constants/routes';

const routes = [
    {
        path: constantRoutes.COMPETITORS.ROUTE,
        component: Competitors,
        exact: true,
    },
];

export default routes;
