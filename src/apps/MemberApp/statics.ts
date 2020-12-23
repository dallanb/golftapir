import Home from '@pages/Home';

import { PendingBadge } from '@components';
import routes from '@constants/routes';
import { MessageFilled } from '@ant-design/icons/lib';

export default [
    {
        path: `/app${routes.HOME.ROUTE}`,
        component: Home,
        name: routes.HOME.LABEL,
        icon: routes.HOME.ICON,
        key: routes.HOME.KEY,
    },
    {
        path: `/app${routes.NOTIFICATIONS.ROUTE}`,
        name: routes.NOTIFICATIONS.LABEL,
        icon: (props: { data: any; value: { pending: number } }) =>
            PendingBadge({ icon: routes.NOTIFICATIONS.ICON, ...props }),
        key: routes.NOTIFICATIONS.KEY,
    },
    {
        path: '/app/messages',
        name: 'Messages',
        icon: MessageFilled,
        key: 'messages',
    },
    {
        path: `/app${routes.COMPETITORS.ROUTE}`,
        name: routes.COMPETITORS.LABEL,
        icon: routes.COMPETITORS.ICON,
        key: routes.COMPETITORS.KEY,
    },
    {
        path: `/app${routes.CONTESTS.ROUTE}`,
        name: routes.CONTESTS.LABEL,
        icon: routes.CONTESTS.ICON,
        key: routes.CONTESTS.KEY,
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
        name: routes.ACCOUNT.LABEL,
        icon: routes.ACCOUNT.ICON,
        key: routes.ACCOUNT.KEY,
    },
];
