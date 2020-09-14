import { Contest } from '@pages';
import CreateContest from '@pages/Contest/CreateContest';
import ViewContest from '@pages/Contest/ViewContest';

export default [
    {
        path: '/contests',
        component: Contest,
        exact: true,
    },
    {
        path: '/contests/create',
        component: CreateContest,
    },
    {
        path: '/contests/:uuid',
        component: ViewContest,
    },
];
