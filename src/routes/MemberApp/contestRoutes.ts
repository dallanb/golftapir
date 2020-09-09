import { Contest } from '../../pages';
import CreateContest from '../../pages/Contest/CreateContest';

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
];
