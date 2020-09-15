import Contests from '@pages/Contests';
import ContestsCreate from '@pages/ContestsCreate';
import Contest from '@pages/ContestsCreate';

export default [
    {
        path: '/contests',
        component: Contests,
        exact: true,
    },
    {
        path: '/contests/create',
        component: ContestsCreate,
    },
    {
        path: '/contests/:uuid',
        component: Contest,
    },
];
