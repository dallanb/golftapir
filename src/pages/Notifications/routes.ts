import Notifications from './Notifications';
import constantRoutes from '@constants/routes';

const routes = [
    {
        path: constantRoutes.MEMBER_APP.NOTIFICATIONS.ROUTE,
        component: Notifications,
        exact: true,
    },
];

export default routes;
