import ResetPassword from './ResetPassword';
import constantRoutes from '@constants/routes';

const routes = [
    {
        path: constantRoutes.ROUTES.RESET_PASSWORD.ROUTE,
        component: ResetPassword,
    },
];

export default routes;
