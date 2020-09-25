import ContestsCreate from './ContestsCreate';
import constants from '@constants';

const routes = [
    {
        path: `${constants.ROUTES.CONTEST}/create`,
        component: ContestsCreate,
    },
];

export default routes;
