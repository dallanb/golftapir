import Home from '@pages/Home';

import { PendingBadge } from '@components';
import routes from '@constants/routes';
import { MessageFilled } from '@ant-design/icons/lib';
import { withAppRoute } from '@utils';
import constants from '@constants';

export default [
    {
        path: withAppRoute(routes.HOME.ROUTE, {
            app: constants.APPS.MEMBER_APP,
        }),
        component: Home,
        name: routes.HOME.LABEL,
        icon: routes.HOME.ICON,
        key: routes.HOME.KEY,
    },
    {
        path: withAppRoute(routes.NOTIFICATIONS.ROUTE, {
            app: constants.APPS.MEMBER_APP,
        }),
        name: routes.NOTIFICATIONS.LABEL,
        icon: (props: { data: any; value: { pending: number } }) =>
            PendingBadge({
                icon: routes.NOTIFICATIONS.ICON,
                ...props,
            }),
        key: routes.NOTIFICATIONS.KEY,
    },
    {
        path: '/app/messages',
        name: 'Messages',
        icon: MessageFilled,
        key: 'messages',
    },
    {
        path: withAppRoute(routes.COMPETITORS.ROUTE, {
            app: constants.APPS.MEMBER_APP,
        }),
        name: routes.COMPETITORS.LABEL,
        icon: routes.COMPETITORS.ICON,
        key: routes.COMPETITORS.KEY,
    },
    {
        path: withAppRoute(routes.CONTESTS.ROUTE, {
            app: constants.APPS.MEMBER_APP,
        }),
        name: routes.CONTESTS.LABEL,
        icon: routes.CONTESTS.ICON,
        key: routes.CONTESTS.KEY,
    },
    {
        path: withAppRoute(routes.LEAGUES.ROUTE, {
            app: constants.APPS.MEMBER_APP,
        }),
        name: routes.LEAGUES.LABEL,
        icon: routes.LEAGUES.ICON,
        key: routes.LEAGUES.KEY,
    },
    // {
    //     path: '/app/wagers',
    //     // component: Home,
    //     name: 'Wagers',
    //     icon: DollarCircleFilled,
    //     key: 'wagers',
    // },
    {
        path: withAppRoute(routes.ACCOUNT.ROUTE, {
            app: constants.APPS.MEMBER_APP,
        }),
        name: routes.ACCOUNT.LABEL,
        icon: routes.ACCOUNT.ICON,
        key: routes.ACCOUNT.KEY,
    },
];
