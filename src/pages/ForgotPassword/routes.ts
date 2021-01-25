import ForgotPassword from './ForgotPassword';
import constantRoutes from '@constants/routes';

const routes = [
    {
        path: constantRoutes.ROUTES.FORGOT_PASSWORD.ROUTE,
        component: ForgotPassword,
    },
];

export default routes;
