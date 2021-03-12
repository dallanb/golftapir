import CoursesCreate from './CoursesCreate';
import constantRoutes from '@constants/routes';
import constants from '@constants';

const routes = [
    {
        path: constantRoutes.ROUTES.COURSES_CREATE.ROUTE,
        component: CoursesCreate,
        role: constants.ROLE.ACTIVE,
    },
];

export default routes;
