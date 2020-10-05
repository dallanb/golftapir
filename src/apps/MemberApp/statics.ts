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

export default [
    {
        path: '/app/home',
        component: Home,
        name: 'Home',
        icon: HomeFilled,
        key: 'home',
    },
    {
        path: '/app/notifications',
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
        path: '/app/competitors',
        // component: Home,
        name: 'Competitors',
        icon: CrownFilled,
        key: 'competitors',
    },
    {
        path: '/app/contests',
        // component: Home,
        name: 'Contests',
        icon: FlagFilled,
        key: 'contests',
    },
    {
        path: '/app/wagers',
        // component: Home,
        name: 'Wagers',
        icon: DollarCircleFilled,
        key: 'wagers',
    },
    {
        path: '/app/settings',
        // component: Account,
        name: 'Settings',
        icon: SettingFilled,
        key: 'settings',
    },
];
