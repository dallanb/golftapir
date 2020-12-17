import Home from '@pages/Home';

import {
    CrownFilled,
    DollarCircleFilled,
    FlagFilled,
    HomeFilled,
    MessageFilled,
    NotificationFilled,
    SettingFilled,
} from '@ant-design/icons';

import { PendingBadge } from '@components';
import constants from '@constants';

export default [
    {
        path: `/app${constants.ROUTES.HOME.ROUTE}`,
        component: Home,
        name: 'Home',
        icon: HomeFilled,
        key: 'home',
    },
    {
        path: `/app${constants.ROUTES.NOTIFICATIONS.ROUTE}`,
        // component: Home,
        name: 'Notifications',
        icon: (props: { data: any; value: { pending: number } }) =>
            PendingBadge({ icon: NotificationFilled, ...props }),
        key: 'notifications',
    },
    {
        path: '/app/messages',
        // component: Home,
        name: 'Messages',
        icon: MessageFilled,
        key: 'messages',
    },
    {
        path: `/app${constants.ROUTES.COMPETITORS.ROUTE}`,
        // component: Home,
        name: 'Competitors',
        icon: CrownFilled,
        key: 'competitors',
    },
    {
        path: `/app${constants.ROUTES.CONTESTS.ROUTE}`,
        // component: Home,
        name: 'Contests',
        icon: FlagFilled,
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
        path: `/app${constants.ROUTES.ACCOUNT.ROUTE}`,
        // component: Contest,
        name: 'Settings',
        icon: SettingFilled,
        key: 'settings',
    },
];
