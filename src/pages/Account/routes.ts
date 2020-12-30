import Account from './Account';
import constantRoutes from '@constants/routes';

const routes = [
    {
        path: constantRoutes.MEMBER_APP.ACCOUNT.ROUTE,
        component: Account,
    },
];

export default routes;
