import Notifications from './Notifications';
import constants from '@constants';

const routes = [
    {
        path: constants.ROUTES.NOTIFICATION.ROUTE,
        component: Notifications,
        exact: true,
    },
];

export default routes;
