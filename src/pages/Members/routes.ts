import Members from './Members';
import constantRoutes from '@constants/routes';

const routes = [
    {
        path: constantRoutes.ROUTES.MEMBERS.ROUTE,
        component: Members,
        exact: true,
    },
];

export default routes;
