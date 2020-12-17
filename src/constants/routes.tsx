import CONSTANTS from '@locale/en-CA';

export const routes = {
    ACCOUNT: {
        ROUTE: '/settings',
        BASE_ROUTE: '/settings',
        KEY: CONSTANTS.PAGES.ACCOUNT.TITLE,
    },
    AUTH: { ROUTE: '/auth', BASE_ROUTE: '/auth', KEY: 'Auth' },
    COMPETITOR: {
        ROUTE: '/competitors/competitor',
        BASE_ROUTE: '/competitors',
        KEY: CONSTANTS.PAGES.COMPETITOR.TITLE,
    },
    COMPETITORS: {
        ROUTE: '/competitors',
        BASE_ROUTE: '/competitors',
        KEY: CONSTANTS.PAGES.COMPETITORS.TITLE,
    },
    CONTEST: {
        ROUTE: '/contests/contest',
        BASE_ROUTE: '/contests',
        KEY: CONSTANTS.PAGES.CONTEST.TITLE,
    },
    CONTESTS: {
        ROUTE: '/contests',
        BASE_ROUTE: '/contests',
        KEY: CONSTANTS.PAGES.CONTESTS.TITLE,
    },
    CONTESTS_CREATE: {
        ROUTE: '/contests/create',
        BASE_ROUTE: '/contests',
        KEY: CONSTANTS.PAGES.CONTESTS_CREATE.TITLE,
    },
    CONTEST_UPDATE: {
        ROUTE: '/contests/contest/update',
        BASE_ROUTE: '/contests',
        KEY: CONSTANTS.PAGES.CONTEST_UPDATE.TITLE,
    },
    HOME: {
        ROUTE: '/home',
        BASE_ROUTE: '/home',
        KEY: CONSTANTS.PAGES.HOME.TITLE,
    },
    LOGIN: { ROUTE: '/login', BASE_ROUTE: '/login' },
    LOGOUT: { ROUTE: '/logout', BASE_ROUTE: '/logout' },
    NOTIFICATIONS: {
        ROUTE: '/notifications',
        BASE_ROUTE: '/notifications',
        KEY: CONSTANTS.PAGES.NOTIFICATIONS.TITLE,
    },
    REGISTER: { ROUTE: '/register', BASE_ROUTE: '/register' },
    WAGER: {
        ROUTE: '/wagers/wager',
        BASE_ROUTE: '/wagers',
        KEY: CONSTANTS.PAGES.WAGERS.TITLE,
    },
    WAGERS: {
        ROUTE: '/wagers',
        BASE_ROUTE: '/wagers',
        KEY: CONSTANTS.PAGES.WAGERS.TITLE,
    },
};
