import MemberSettings from './MemberSettings';
import constantRoutes from '@constants/routes';
import constants from '@constants';

const routes = [
    {
        path: constantRoutes.ROUTES.MEMBER_SETTINGS.ROUTE,
        component: MemberSettings,
        role: constants.ROLE.ACTIVE,
    },
];

export default routes;
