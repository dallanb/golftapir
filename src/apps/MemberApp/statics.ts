import Home from '@pages/Home';
import routes from '@constants/routes';
import { withAppRoute } from '@utils';
import constants from '@constants';

export default [
    {
        path: withAppRoute(routes.ROUTES.HOME.ROUTE, {
            app: constants.APPS.MEMBER_APP,
        }),
        component: Home,
        name: routes.ROUTES.HOME.LABEL,
        icon: routes.ROUTES.HOME.ICON,
        iconSelected: routes.ROUTES.HOME.ICON_SELECTED,
        key: routes.ROUTES.HOME.KEY,
    },
    // {
    //     path: withAppRoute(routes.ROUTES.NOTIFICATIONS.ROUTE, {
    //         app: constants.APPS.MEMBER_APP,
    //     }),
    //     name: routes.ROUTES.NOTIFICATIONS.LABEL,
    //     icon: (props: { data: any; value: { pending: number } }) =>
    //         PendingBadge({
    //             icon: routes.ROUTES.NOTIFICATIONS.ICON,
    //             ...props,
    //         }),
    //     key: routes.ROUTES.NOTIFICATIONS.KEY,
    // },
    // {
    //     path: '/app/messages',
    //     name: 'Messages',
    //     icon: MessageFilled,
    //     key: 'messages',
    // },
    // {
    //     path: withAppRoute(routes.ROUTES.COMPETITORS.ROUTE, {
    //         app: constants.APPS.MEMBER_APP,
    //     }),
    //     name: routes.ROUTES.COMPETITORS.LABEL,
    //     icon: routes.ROUTES.COMPETITORS.ICON,
    //     key: routes.ROUTES.COMPETITORS.KEY,
    // },
    // {
    //     path: withAppRoute(routes.ROUTES.LEAGUES.ROUTE, {
    //         app: constants.APPS.MEMBER_APP,
    //     }),
    //     name: routes.ROUTES.LEAGUES.LABEL,
    //     icon: routes.ROUTES.LEAGUES.ICON,
    //     key: routes.ROUTES.LEAGUES.KEY,
    // },
    {
        path: withAppRoute(routes.ROUTES.ACCOUNT.ROUTE, {
            app: constants.APPS.MEMBER_APP,
        }),
        name: routes.ROUTES.ACCOUNT.LABEL,
        icon: routes.ROUTES.ACCOUNT.ICON,
        iconSelected: routes.ROUTES.ACCOUNT.ICON_SELECTED,
        key: routes.ROUTES.ACCOUNT.KEY,
    },
];
