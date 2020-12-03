import CONSTANTS from '@locale/en-CA';

const constants = {
    TARGETS: {
        ACCOUNT_PAGE: 'ACCOUNT_PAGE',
        CONTEST_PAGE: 'CONTEST_PAGE',
        CONTESTS_PAGE: 'CONTESTS_PAGE',
        CONTESTS_CREATE_PAGE: 'CONTESTS_CREATE_PAGE',
        COMPETITOR_PAGE: 'COMPETITOR_PAGE',
        COMPETITORS_PAGE: 'COMPETITORS_PAGE',
        HOME_PAGE: 'HOME_PAGE',
        LOGIN_PAGE: 'LOGIN_PAGE',
        REGISTER_PAGE: 'REGISTER_PAGE',
        WAGERS_PAGE: 'WAGERS_PAGE',
    },
    STATUS: {
        PENDING: {
            COLOUR: 'orange',
            TWO_TONE_COLOUR: '#FFA500',
            KEY: 'pending',
        },
        READY: {
            COLOUR: 'blue',
            TWO_TONE_COLOUR: '#1890ff',
            KEY: 'ready',
        },
        ACTIVE: {
            COLOUR: 'green',
            TWO_TONE_COLOUR: '#52c41a',
            KEY: 'active',
        },
        INACTIVE: {
            COLOUR: 'red',
            TWO_TONE_COLOUR: '#eb2f96',
            KEY: 'inactive',
        },
        COMPLETED: {
            COLOUR: 'turquoise',
            TWO_TONE_COLOUR: '#00E4FF',
            KEY: 'completed',
        },
        APPROVED: {
            COLOUR: 'purple',
            TWO_TONE_COLOUR: '#7800FF',
            KEY: 'approved',
        },
        SPECTATOR: {
            COLOUR: 'brown',
            TWO_TONE_COLOUR: '#5A2601',
            KEY: 'spectator',
        },
    },
    ACTION: {
        ACTIVATE: {
            TWO_TONE_COLOUR: '#1890ff',
            KEY: 'activate',
            LABEL: 'Activate',
        },
        UPDATE: {
            TWO_TONE_COLOUR: '#FFA500',
            KEY: 'update',
            LABEL: 'Update',
        },
        READY: {
            TWO_TONE_COLOUR: '#00e64d',
            KEY: 'ready',
            LABEL: 'Ready',
        },
        CHALLENGE: {
            TWO_TONE_COLOUR: '#1E8793',
            KEY: 'challenge',
            LABEL: 'Challenge',
        },
        COMPLETE: {
            TWO_TONE_COLOUR: '#6E7115',
            KEY: 'complete',
            LABEL: 'Complete',
        },
        APPROVE: {
            TWO_TONE_COLOUR: '#00E4FF',
            KEY: 'approve',
            LABEL: 'Approve',
        },
    },
    ROUTES: {
        ACCOUNT: { ROUTE: '/settings', BASE_ROUTE: '/settings' },
        AUTH: { ROUTE: '/auth', BASE_ROUTE: '/auth' },
        COMPETITOR: { ROUTE: '/competitor', BASE_ROUTE: '/competitors' },
        COMPETITORS: { ROUTE: '/competitors', BASE_ROUTE: '/competitors' },
        CONTEST: { ROUTE: '/contest', BASE_ROUTE: '/contests' },
        CONTESTS: { ROUTE: '/contests', BASE_ROUTE: '/contests' },
        CONTESTS_CREATE: { ROUTE: '/contests/create', BASE_ROUTE: '/contests' },
        CONTEST_UPDATE: { ROUTE: '/contest/update', BASE_ROUTE: '/contests' },
        HOME: { ROUTE: '/home', BASE_ROUTE: '/home' },
        LOGIN: { ROUTE: '/login', BASE_ROUTE: '/login' },
        LOGOUT: { ROUTE: '/logout', BASE_ROUTE: '/logout' },
        NOTIFICATION: { ROUTE: '/notifications', BASE_ROUTE: '/notifications' },
        REGISTER: { ROUTE: '/register', BASE_ROUTE: '/register' },
        WAGER: { ROUTE: '/wager', BASE_ROUTE: '/wagers' },
        WAGERS: { ROUTE: '/wagers', BASE_ROUTE: '/wagers' },
    },
    TOPICS: {
        AUTH: 'auth',
        ACCOUNTS: 'accounts',
        CONTESTS: 'contests',
        SCORES: 'scores',
        SPORTS: 'sports',
        WAGERS: 'wagers',
        NOTIFICATIONS: 'notifications',
    },
    EVENTS: {
        NOTIFICATIONS: {
            PENDING: 'pending',
        },
        CONTESTS: {
            PARTICIPANT_INVITED: 'participant_invited',
            PARTICIPANT_ACTIVE: 'participant_active',
            CONTEST_READY: 'contest_ready',
            CONTEST_ACTIVE: 'contest_active',
        },
        SCORES: {
            STROKE_UPDATE: 'stroke_update',
        },
    },
    S3_FOLDERS: {
        ACCOUNT: {
            AVATAR: '/account/avatars/',
        },
        CONTEST: {
            AVATAR: '/contest/avatars/',
        },
    },
    AVATAR: {
        WIDTH: 256,
        HEIGHT: 256,
    },
};

export default constants;
