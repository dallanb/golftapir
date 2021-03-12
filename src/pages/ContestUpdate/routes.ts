import ContestUpdate from './ContestUpdate';
import constantRoutes from '@constants/routes';
import constants from '@constants';

const routes = [
    {
        path: constantRoutes.ROUTES.CONTEST_UPDATE.ROUTE,
        component: ContestUpdate,
        role: constants.ROLE.ACTIVE,
    },
];

export default routes;
