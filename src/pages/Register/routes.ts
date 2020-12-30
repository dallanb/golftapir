import Register from './Register';
import constantRoutes from '@constants/routes';

const routes = [
    {
        path: constantRoutes.AUTH_APP.REGISTER.ROUTE,
        component: Register,
    },
];

export default routes;
