import Members from './Members';
import constantRoutes from '@constants/routes';
import constants from '@constants';

const routes = [
    {
        path: constantRoutes.ROUTES.MEMBERS.ROUTE,
        component: Members,
        exact: true,
        role: constants.ROLE.PENDING,
    },
];

export default routes;
