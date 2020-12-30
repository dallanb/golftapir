import Login from './Login';
import constantRoutes from '@constants/routes';

const routes = [
    {
        path: constantRoutes.AUTH_APP.LOGIN.ROUTE,
        component: Login,
    },
];

export default routes;
