import { Home } from '../pages';
import {
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
];
