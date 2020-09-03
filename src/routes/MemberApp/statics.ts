import { Account, Home } from '../../pages';
import {
    CrownFilled,
    DollarCircleFilled,
    FlagFilled,
    HomeFilled,
    MessageFilled,
    NotificationFilled,
    SettingFilled,
} from '@ant-design/icons';

export default [
    {
        path: '/app/home',
        component: Home,
        name: 'Home',
        icon: HomeFilled,
    },
    {
        path: '/app/notifications',
        // component: Home,
        name: 'Notifications',
        icon: NotificationFilled,
    },
    {
        path: '/app/messages',
        // component: Home,
        name: 'Messages',
        icon: MessageFilled,
    },
    {
        path: '/app/competitors',
        // component: Home,
        name: 'Competitors',
        icon: CrownFilled,
    },
    {
        path: '/app/contests',
        // component: Home,
        name: 'Contests',
        icon: FlagFilled,
    },
    {
        path: '/app/wagers',
        // component: Home,
        name: 'Wagers',
        icon: DollarCircleFilled,
    },
    {
        path: '/app/settings',
        component: Account,
        name: 'Settings',
        icon: SettingFilled,
    },
];
