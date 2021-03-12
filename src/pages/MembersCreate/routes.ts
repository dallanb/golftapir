import MembersCreate from './MembersCreate';
import constantRoutes from '@constants/routes';
import constants from '@constants';

const routes = [
    {
        path: constantRoutes.ROUTES.MEMBERS_CREATE.ROUTE,
        component: MembersCreate,
        role: constants.ROLE.ACTIVE, // this should be active and owner
    },
];

export default routes;
