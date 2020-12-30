import CONSTANTS from '@locale/en-CA';
import {
    CrownFilled,
    DollarCircleFilled,
    FlagFilled,
    HomeFilled,
    MessageFilled,
    NotificationFilled,
    SettingFilled,
    TeamOutlined,
} from '@ant-design/icons';

const routes = {
    AUTH_APP: {
        AUTH: {
            ROUTE: '/auth',
            BASE_ROUTE: '/auth',
            KEY: 'auth',
            LABEL: 'Auth',
            ICON: null,
        },
        LOGIN: {
            ROUTE: '/auth/login',
            BASE_ROUTE: '/auth',
            KEY: 'login',
            LABEL: null,
            ICON: null,
        },
        LOGOUT: {
            ROUTE: '/auth/logout',
            BASE_ROUTE: '/auth',
            KEY: 'logout',
            LABEL: null,
            ICON: null,
        },
        REGISTER: {
            ROUTE: '/auth/register',
            BASE_ROUTE: '/auth',
            KEY: 'register',
            LABEL: null,
            ICON: null,
        },
    },
    MEMBER_APP: {
        ACCOUNT: {
            ROUTE: '/app/settings',
            BASE_ROUTE: '/app/settings',
            LABEL: CONSTANTS.PAGES.ACCOUNT.TITLE,
            KEY: CONSTANTS.PAGES.ACCOUNT.TITLE,
            ICON: SettingFilled,
        },
        COMPETITOR: {
            ROUTE: '/app/competitors/competitor',
            BASE_ROUTE: '/app/competitors',
            KEY: 'competitor',
            LABEL: CONSTANTS.PAGES.COMPETITOR.TITLE,
            ICON: null,
        },
        COMPETITORS: {
            ROUTE: '/app/competitors',
            BASE_ROUTE: '/app/competitors',
            KEY: 'competitors',
            LABEL: CONSTANTS.PAGES.COMPETITORS.TITLE,
            ICON: TeamOutlined,
        },
        CONTEST: {
            ROUTE: '/app/contests/contest',
            BASE_ROUTE: '/app/contests',
            KEY: 'contest',
            LABEL: CONSTANTS.PAGES.CONTEST.TITLE,
            ICON: null,
        },
        CONTESTS: {
            ROUTE: '/app/contests',
            BASE_ROUTE: '/app/contests',
            KEY: 'contests',
            LABEL: CONSTANTS.PAGES.CONTESTS.TITLE,
            ICON: FlagFilled,
        },
        CONTESTS_CREATE: {
            ROUTE: '/app/contests/create',
            BASE_ROUTE: '/app/contests',
            KEY: 'contests_create',
            LABEL: CONSTANTS.PAGES.CONTESTS_CREATE.TITLE,
            ICON: null,
        },
        CONTEST_UPDATE: {
            ROUTE: '/app/contests/contest/update',
            BASE_ROUTE: '/app/contests',
            KEY: 'contest_update',
            LABEL: CONSTANTS.PAGES.CONTEST_UPDATE.TITLE,
            ICON: null,
        },
        HOME: {
            ROUTE: '/app',
            BASE_ROUTE: '/app',
            KEY: 'home',
            LABEL: CONSTANTS.PAGES.HOME.TITLE,
            ICON: HomeFilled,
        },
        LEAGUES: {
            ROUTE: '/app/leagues',
            BASE_ROUTE: '/app/leagues',
            KEY: 'leagues',
            LABEL: CONSTANTS.PAGES.LEAGUES.TITLE,
            ICON: CrownFilled,
        },
        LEAGUES_CREATE: {
            ROUTE: '/app/leagues/create',
            BASE_ROUTE: '/app/leagues',
            KEY: 'leagues_create',
            LABEL: CONSTANTS.PAGES.LEAGUES.TITLE,
            ICON: CrownFilled,
        },
        NOTIFICATIONS: {
            ROUTE: '/app/notifications',
            BASE_ROUTE: '/app/notifications',
            KEY: 'notifications',
            LABEL: CONSTANTS.PAGES.NOTIFICATIONS.TITLE,
            ICON: NotificationFilled,
        },

        WAGER: {
            ROUTE: '/app/wagers/wager',
            BASE_ROUTE: '/app/wagers',
            KEY: 'wager',
            LABEL: CONSTANTS.PAGES.WAGERS.TITLE,
            ICON: null,
        },
        WAGERS: {
            ROUTE: '/app/wagers',
            BASE_ROUTE: '/app/wagers',
            KEY: 'wager',
            LABEL: CONSTANTS.PAGES.WAGERS.TITLE,
            ICON: DollarCircleFilled,
        },
    },
    LEAGUE_APP: {
        LEAGUE: {
            ROUTE: '/league/:uuid',
            BASE_ROUTE: '/league/:uuid',
            KEY: 'league',
            LABEL: CONSTANTS.PAGES.LEAGUE.TITLE,
            ICON: CrownFilled,
        },
    },
};

export default routes;
