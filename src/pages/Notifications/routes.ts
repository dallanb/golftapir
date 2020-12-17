import Notifications from './Notifications';
import constants from '@constants';

const routes = [
    {
        path: constants.ROUTES.NOTIFICATIONS.ROUTE,
        component: Notifications,
        exact: true,
    },
];

export default routes;
