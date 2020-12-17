import Home from '@pages/Home';

import { PendingBadge } from '@components';
import routes from '@constants/routes';
import { MessageFilled } from '@ant-design/icons/lib';

export default [
    {
        path: `/app${routes.HOME.ROUTE}`,
        component: Home,
        name: routes.HOME.KEY,
        icon: routes.HOME.ICON,
        key: 'home',
    },
    {
        path: `/app${routes.NOTIFICATIONS.ROUTE}`,
        name: routes.NOTIFICATIONS.KEY,
        icon: (props: { data: any; value: { pending: number } }) =>
            PendingBadge({ icon: routes.NOTIFICATIONS.ICON, ...props }),
        key: 'notifications',
    },
    {
        path: '/app/messages',
        name: 'Messages',
        icon: MessageFilled,
        key: 'messages',
    },
    {
        path: `/app${routes.COMPETITORS.ROUTE}`,
        name: routes.COMPETITORS.KEY,
        icon: routes.COMPETITORS.ICON,
        key: 'competitors',
    },
    {
        path: `/app${routes.CONTESTS.ROUTE}`,
        name: routes.CONTESTS.KEY,
        icon: routes.CONTESTS.ICON,
        key: 'contests',
    },
    // {
    //     path: '/app/wagers',
    //     // component: Home,
    //     name: 'Wagers',
    //     icon: DollarCircleFilled,
    //     key: 'wagers',
    // },
    {
        path: `/app${routes.ACCOUNT.ROUTE}`,
        name: routes.ACCOUNT.KEY,
        icon: routes.ACCOUNT.ICON,
        key: 'settings',
    },
];
