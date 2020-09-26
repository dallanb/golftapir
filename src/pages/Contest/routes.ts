import Contest from './Contest';
import constants from '@constants';

const routes = [
    {
        path: `${constants.ROUTES.CONTEST}/:uuid`,
        component: Contest,
    },
];

export default routes;
