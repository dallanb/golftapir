import Home from '@pages/Home';

import { PendingBadge } from '@components';
import routes from '@constants/routes';
import { MessageFilled } from '@ant-design/icons/lib';

export default [
    {
        path: routes.MEMBER_APP.HOME.ROUTE,
        component: Home,
        name: routes.MEMBER_APP.HOME.LABEL,
        icon: routes.MEMBER_APP.HOME.ICON,
        key: routes.MEMBER_APP.HOME.KEY,
    },
    {
        path: routes.MEMBER_APP.NOTIFICATIONS.ROUTE,
        name: routes.MEMBER_APP.NOTIFICATIONS.LABEL,
        icon: (props: { data: any; value: { pending: number } }) =>
            PendingBadge({
                icon: routes.MEMBER_APP.NOTIFICATIONS.ICON,
                ...props,
            }),
        key: routes.MEMBER_APP.NOTIFICATIONS.KEY,
    },
    {
        path: '/app/messages',
        name: 'Messages',
        icon: MessageFilled,
        key: 'messages',
    },
    {
        path: routes.MEMBER_APP.COMPETITORS.ROUTE,
        name: routes.MEMBER_APP.COMPETITORS.LABEL,
        icon: routes.MEMBER_APP.COMPETITORS.ICON,
        key: routes.MEMBER_APP.COMPETITORS.KEY,
    },
    {
        path: routes.MEMBER_APP.CONTESTS.ROUTE,
        name: routes.MEMBER_APP.CONTESTS.LABEL,
        icon: routes.MEMBER_APP.CONTESTS.ICON,
        key: routes.MEMBER_APP.CONTESTS.KEY,
    },
    {
        path: routes.MEMBER_APP.LEAGUES.ROUTE,
        name: routes.MEMBER_APP.LEAGUES.LABEL,
        icon: routes.MEMBER_APP.LEAGUES.ICON,
        key: routes.MEMBER_APP.LEAGUES.KEY,
    },
    // {
    //     path: '/app/wagers',
    //     // component: Home,
    //     name: 'Wagers',
    //     icon: DollarCircleFilled,
    //     key: 'wagers',
    // },
    {
        path: routes.MEMBER_APP.ACCOUNT.ROUTE,
        name: routes.MEMBER_APP.ACCOUNT.LABEL,
        icon: routes.MEMBER_APP.ACCOUNT.ICON,
        key: routes.MEMBER_APP.ACCOUNT.KEY,
    },
];
