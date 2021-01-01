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
            BASE_KEY: 'auth',
            KEY: 'auth',
            LABEL: 'Auth',
            ICON: null,
        },
        LOGIN: {
            ROUTE: '/auth/login',
            BASE_KEY: 'auth',
            KEY: 'login',
            LABEL: null,
            ICON: null,
        },
        LOGOUT: {
            ROUTE: '/auth/logout',
            BASE_KEY: 'auth',
            KEY: 'logout',
            LABEL: null,
            ICON: null,
        },
        REGISTER: {
            ROUTE: '/auth/register',
            BASE_KEY: 'auth',
            KEY: 'register',
            LABEL: null,
            ICON: null,
        },
    },
    MEMBER_APP: {
        ACCOUNT: {
            ROUTE: '/app/settings',
            BASE_KEY: 'settings',
            LABEL: CONSTANTS.PAGES.ACCOUNT.TITLE,
            KEY: 'settings',
            ICON: SettingFilled,
        },
        COMPETITOR: {
            ROUTE: '/app/competitors/competitor/:uuid',
            BASE_KEY: 'competitors',
            KEY: 'competitor',
            LABEL: CONSTANTS.PAGES.COMPETITOR.TITLE,
            ICON: null,
        },
        COMPETITORS: {
            ROUTE: '/app/competitors',
            BASE_KEY: 'competitors',
            KEY: 'competitors',
            LABEL: CONSTANTS.PAGES.COMPETITORS.TITLE,
            ICON: TeamOutlined,
        },
        CONTEST: {
            ROUTE: '/app/contests/contest',
            BASE_KEY: 'contests',
            KEY: 'contest',
            LABEL: CONSTANTS.PAGES.CONTEST.TITLE,
            ICON: null,
        },
        CONTESTS: {
            ROUTE: '/app/contests',
            BASE_KEY: 'contests',
            KEY: 'contests',
            LABEL: CONSTANTS.PAGES.CONTESTS.TITLE,
            ICON: FlagFilled,
        },
        CONTESTS_CREATE: {
            ROUTE: '/app/contests/create',
            BASE_KEY: 'contests',
            KEY: 'contests_create',
            LABEL: CONSTANTS.PAGES.CONTESTS_CREATE.TITLE,
            ICON: null,
        },
        CONTEST_UPDATE: {
            ROUTE: '/app/contests/contest/update',
            BASE_KEY: 'contest',
            KEY: 'contest_update',
            LABEL: CONSTANTS.PAGES.CONTEST_UPDATE.TITLE,
            ICON: null,
        },
        HOME: {
            ROUTE: '/app',
            BASE_KEY: 'home',
            KEY: 'home',
            LABEL: CONSTANTS.PAGES.HOME.TITLE,
            ICON: HomeFilled,
        },
        LEAGUES: {
            ROUTE: '/app/leagues',
            BASE_KEY: 'leagues',
            KEY: 'leagues',
            LABEL: CONSTANTS.PAGES.LEAGUES.TITLE,
            ICON: CrownFilled,
        },
        LEAGUES_CREATE: {
            ROUTE: '/app/leagues/create',
            BASE_KEY: 'leagues',
            KEY: 'leagues_create',
            LABEL: CONSTANTS.PAGES.LEAGUES.TITLE,
            ICON: CrownFilled,
        },
        NOTIFICATIONS: {
            ROUTE: '/app/notifications',
            BASE_KEY: 'notifications',
            KEY: 'notifications',
            LABEL: CONSTANTS.PAGES.NOTIFICATIONS.TITLE,
            ICON: NotificationFilled,
        },

        WAGER: {
            ROUTE: '/app/wagers/wager',
            BASE_KEY: 'wagers',
            KEY: 'wager',
            LABEL: CONSTANTS.PAGES.WAGERS.TITLE,
            ICON: null,
        },
        WAGERS: {
            ROUTE: '/app/wagers',
            BASE_KEY: 'wagers',
            KEY: 'wager',
            LABEL: CONSTANTS.PAGES.WAGERS.TITLE,
            ICON: DollarCircleFilled,
        },
    },
    LEAGUE_APP: {
        LEAGUE: {
            ROUTE: '/league/:uuid',
            BASE_KEY: 'league',
            KEY: 'league',
            LABEL: CONSTANTS.PAGES.LEAGUE.TITLE,
            ICON: CrownFilled,
        },
        LEAGUE_MEMBER: {
            ROUTE: '/league/:uuid/members/:member_uuid',
            BASE_KEY: 'league_members',
            KEY: 'league_member',
            LABEL: CONSTANTS.PAGES.LEAGUE_MEMBER.TITLE,
            ICON: null,
        },
        LEAGUE_MEMBERS: {
            ROUTE: '/league/:uuid/members',
            BASE_KEY: 'league_members',
            KEY: 'league_members',
            LABEL: CONSTANTS.PAGES.LEAGUE_MEMBERS.TITLE,
            ICON: CrownFilled,
        },
    },
};

export default routes;
