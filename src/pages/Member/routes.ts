import Member from './Member';
import constantRoutes from '@constants/routes';
import constants from '@constants';

const routes = [
    {
        path: constantRoutes.ROUTES.MEMBER.ROUTE,
        component: Member,
        role: constants.ROLE.ACTIVE,
    },
];

export default routes;
