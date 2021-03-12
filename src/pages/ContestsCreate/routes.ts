import ContestsCreate from './ContestsCreate';
import constantRoutes from '@constants/routes';
import constants from '@constants';

const routes = [
    {
        path: constantRoutes.ROUTES.CONTESTS_CREATE.ROUTE,
        component: ContestsCreate,
        role: constants.ROLE.ACTIVE,
    },
];

export default routes;
