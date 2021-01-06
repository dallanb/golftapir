import Member from './Member';
import constantRoutes from '@constants/routes';

const routes = [
    {
        path: constantRoutes.ROUTES.MEMBER.ROUTE,
        component: Member,
    },
];

export default routes;
