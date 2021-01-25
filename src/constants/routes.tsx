import CONSTANTS from '@locale/en-CA';
import {
    CrownFilled,
    DollarCircleFilled,
    FlagFilled,
    HomeFilled,
    NotificationFilled,
    SettingFilled,
    TeamOutlined,
} from '@ant-design/icons';

const routes = {
    APPS: {
        AUTH_APP: {
            ROUTE: '/auth',
        },
        MEMBER_APP: {
            ROUTE: '/app',
        },
        LEAGUE_APP: {
            ROUTE: '/league_app/:league_uuid',
        },
    },
    ROUTES: {
        LOGIN: {
            ROUTE: '/login',
            BASE_KEY: 'auth',
            KEY: 'login',
            LABEL: null,
            ICON: null,
        },
        LOGOUT: {
            ROUTE: '/logout',
            BASE_KEY: 'auth',
            KEY: 'logout',
            LABEL: null,
            ICON: null,
        },
        REGISTER: {
            ROUTE: '/register',
            BASE_KEY: 'auth',
            KEY: 'register',
            LABEL: null,
            ICON: null,
        },
        VERIFY: {
            ROUTE: '/verify',
            BASE_KEY: 'auth',
            KEY: 'verify',
            LABEL: null,
            ICON: null,
        },
        FORGOT_PASSWORD: {
            ROUTE: '/forgot_password',
            BASE_KEY: 'auth',
            KEY: 'forgot_password',
            LABEL: null,
            ICON: null,
        },
        ACCOUNT: {
            ROUTE: '/settings',
            BASE_KEY: 'settings',
            LABEL: CONSTANTS.PAGES.ACCOUNT.TITLE,
            KEY: 'settings',
            ICON: SettingFilled,
        },
        COMPETITOR: {
            ROUTE: '/competitors/:competitor_uuid',
            BASE_KEY: 'competitors',
            KEY: 'competitor',
            LABEL: CONSTANTS.PAGES.COMPETITOR.TITLE,
            ICON: null,
        },
        COMPETITORS: {
            ROUTE: '/competitors',
            BASE_KEY: 'competitors',
            KEY: 'competitors',
            LABEL: CONSTANTS.PAGES.COMPETITORS.TITLE,
            ICON: TeamOutlined,
        },
        CONTEST: {
            ROUTE: '/contests/:contest_uuid',
            BASE_KEY: 'contests',
            KEY: 'contest',
            LABEL: CONSTANTS.PAGES.CONTEST.TITLE,
            ICON: null,
        },
        CONTESTS: {
            ROUTE: '/contests',
            BASE_KEY: 'contests',
            KEY: 'contests',
            LABEL: CONSTANTS.PAGES.CONTESTS.TITLE,
            ICON: FlagFilled,
        },
        CONTESTS_CREATE: {
            ROUTE: '/contests/create',
            BASE_KEY: 'contests',
            KEY: 'contests_create',
            LABEL: CONSTANTS.PAGES.CONTESTS_CREATE.TITLE,
            ICON: null,
        },
        CONTEST_UPDATE: {
            ROUTE: '/contests/:contest_uuid/update',
            BASE_KEY: 'contest',
            KEY: 'contest_update',
            LABEL: CONSTANTS.PAGES.CONTEST_UPDATE.TITLE,
            ICON: null,
        },
        HOME: {
            ROUTE: '/home',
            BASE_KEY: 'home',
            KEY: 'home',
            LABEL: CONSTANTS.PAGES.HOME.TITLE,
            ICON: HomeFilled,
        },
        LEAGUE_HOME: {
            ROUTE: '/home',
            BASE_KEY: 'league_home',
            KEY: 'league_home',
            LABEL: CONSTANTS.PAGES.HOME.TITLE,
            ICON: HomeFilled,
        },
        LEAGUES: {
            ROUTE: '/leagues',
            BASE_KEY: 'leagues',
            KEY: 'leagues',
            LABEL: CONSTANTS.PAGES.LEAGUES.TITLE,
            ICON: CrownFilled,
        },
        LEAGUES_CREATE: {
            ROUTE: '/leagues/create',
            BASE_KEY: 'leagues',
            KEY: 'leagues_create',
            LABEL: CONSTANTS.PAGES.LEAGUES.TITLE,
            ICON: CrownFilled,
        },
        NOTIFICATIONS: {
            ROUTE: '/notifications',
            BASE_KEY: 'notifications',
            KEY: 'notifications',
            LABEL: CONSTANTS.PAGES.NOTIFICATIONS.TITLE,
            ICON: NotificationFilled,
        },

        WAGER: {
            ROUTE: '/wagers/:wager_uuid',
            BASE_KEY: 'wagers',
            KEY: 'wager',
            LABEL: CONSTANTS.PAGES.WAGERS.TITLE,
            ICON: null,
        },
        WAGERS: {
            ROUTE: '/wagers',
            BASE_KEY: 'wagers',
            KEY: 'wager',
            LABEL: CONSTANTS.PAGES.WAGERS.TITLE,
            ICON: DollarCircleFilled,
        },
        LEAGUE: {
            ROUTE: '/leagues/:league_uuid',
            BASE_KEY: 'league',
            KEY: 'league',
            LABEL: CONSTANTS.PAGES.LEAGUE.TITLE,
            ICON: CrownFilled,
        },
        MEMBER: {
            ROUTE: '/members/:member_uuid',
            BASE_KEY: 'members',
            KEY: 'member',
            LABEL: CONSTANTS.PAGES.MEMBER.TITLE,
            ICON: null,
        },
        MEMBERS: {
            ROUTE: '/members',
            BASE_KEY: 'members',
            KEY: 'members',
            LABEL: CONSTANTS.PAGES.MEMBERS.TITLE,
            ICON: TeamOutlined,
        },
        MEMBERS_CREATE: {
            ROUTE: '/members/create',
            BASE_KEY: 'members',
            KEY: 'members_create',
            LABEL: CONSTANTS.PAGES.MEMBERS_CREATE.TITLE,
            ICON: null,
        },
        MEMBER_SETTINGS: {
            ROUTE: '/member_settings',
            BASE_KEY: 'member_settings',
            KEY: 'member_settings',
            LABEL: CONSTANTS.PAGES.MEMBER_SETTINGS.TITLE,
            ICON: SettingFilled,
        },
    },
};

export default routes;
