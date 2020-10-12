import ContestsUpdate from './ContestsUpdate';
import constants from '@constants';

const routes = [
    {
        path: `${constants.ROUTES.CONTEST}/:uuid/update`,
        component: ContestsUpdate,
    },
];

export default routes;
