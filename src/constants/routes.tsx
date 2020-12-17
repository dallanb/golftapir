import CONSTANTS from '@locale/en-CA';
import {
    CrownFilled,
    DollarCircleFilled,
    FlagFilled,
    HomeFilled,
    MessageFilled,
    NotificationFilled,
    SettingFilled,
} from '@ant-design/icons';

const routes = {
    ACCOUNT: {
        ROUTE: '/settings',
        BASE_ROUTE: '/settings',
        KEY: CONSTANTS.PAGES.ACCOUNT.TITLE,
        ICON: SettingFilled,
    },
    AUTH: { ROUTE: '/auth', BASE_ROUTE: '/auth', KEY: 'Auth', ICON: null },
    COMPETITOR: {
        ROUTE: '/competitors/competitor',
        BASE_ROUTE: '/competitors',
        KEY: CONSTANTS.PAGES.COMPETITOR.TITLE,
        ICON: null,
    },
    COMPETITORS: {
        ROUTE: '/competitors',
        BASE_ROUTE: '/competitors',
        KEY: CONSTANTS.PAGES.COMPETITORS.TITLE,
        ICON: CrownFilled,
    },
    CONTEST: {
        ROUTE: '/contests/contest',
        BASE_ROUTE: '/contests',
        KEY: CONSTANTS.PAGES.CONTEST.TITLE,
        ICON: null,
    },
    CONTESTS: {
        ROUTE: '/contests',
        BASE_ROUTE: '/contests',
        KEY: CONSTANTS.PAGES.CONTESTS.TITLE,
        ICON: FlagFilled,
    },
    CONTESTS_CREATE: {
        ROUTE: '/contests/create',
        BASE_ROUTE: '/contests',
        KEY: CONSTANTS.PAGES.CONTESTS_CREATE.TITLE,
        ICON: null,
    },
    CONTEST_UPDATE: {
        ROUTE: '/contests/contest/update',
        BASE_ROUTE: '/contests',
        KEY: CONSTANTS.PAGES.CONTEST_UPDATE.TITLE,
        ICON: null,
    },
    HOME: {
        ROUTE: '/home',
        BASE_ROUTE: '/home',
        KEY: CONSTANTS.PAGES.HOME.TITLE,
        ICON: HomeFilled,
    },
    LOGIN: { ROUTE: '/login', BASE_ROUTE: '/login', KEY: null, ICON: null },
    LOGOUT: { ROUTE: '/logout', BASE_ROUTE: '/logout', KEY: null, ICON: null },
    NOTIFICATIONS: {
        ROUTE: '/notifications',
        BASE_ROUTE: '/notifications',
        KEY: CONSTANTS.PAGES.NOTIFICATIONS.TITLE,
        ICON: NotificationFilled,
    },
    REGISTER: {
        ROUTE: '/register',
        BASE_ROUTE: '/register',
        KEY: null,
        ICON: null,
    },
    WAGER: {
        ROUTE: '/wagers/wager',
        BASE_ROUTE: '/wagers',
        KEY: CONSTANTS.PAGES.WAGERS.TITLE,
        ICON: null,
    },
    WAGERS: {
        ROUTE: '/wagers',
        BASE_ROUTE: '/wagers',
        KEY: CONSTANTS.PAGES.WAGERS.TITLE,
        ICON: DollarCircleFilled,
    },
};

export default routes;
