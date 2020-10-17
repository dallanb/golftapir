import Competitor from './Competitor';
import constants from '@constants';

const routes = [
    {
        path: `${constants.ROUTES.COMPETITOR}/:uuid`,
        component: Competitor,
    },
];

export default routes;
