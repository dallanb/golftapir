import { Contest, Contests, ContestsCreate } from '@pages';
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
