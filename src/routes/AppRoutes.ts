import { Home } from '../pages';
import {
    CrownFilled,
    DollarCircleFilled,
    FlagFilled,
    HomeFilled,
    MessageFilled,
    NotificationFilled,
} from '@ant-design/icons';

export default [
    {
        path: '/home',
        component: Home,
        name: 'Home',
        icon: HomeFilled,
    },
    {
        path: '/notifications',
        // component: Home,
        name: 'Notifications',
        icon: NotificationFilled,
    },
    {
        path: '/messages',
        // component: Home,
        name: 'Messages',
        icon: MessageFilled,
    },
    {
        path: '/competitors',
        // component: Home,
        name: 'Competitors',
        icon: CrownFilled,
    },
    {
        path: '/contests',
        // component: Home,
        name: 'Contests',
        icon: FlagFilled,
    },
    {
        path: '/wagers',
        // component: Home,
        name: 'Wagers',
        icon: DollarCircleFilled,
    },
];
