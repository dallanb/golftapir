import Logout from './Logout';
import constantRoutes from '@constants/routes';

const routes = [
    {
        path: constantRoutes.AUTH_APP.LOGOUT.ROUTE,
        component: Logout,
    },
];

export default routes;
