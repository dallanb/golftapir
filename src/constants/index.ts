const constants = {
    TARGETS: {
        ACCOUNT_PAGE: 'ACCOUNT_PAGE',
        CONTEST_PAGE: 'CONTEST_PAGE',
        CONTESTS_PAGE: 'CONTESTS_PAGE',
        CONTESTS_CREATE_PAGE: 'CONTESTS_CREATE_PAGE',
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
    },
    ACTION: {
        ACTIVATE: {
            COLOUR: 'blue',
            TWO_TONE_COLOUR: '#1890ff',
            KEY: 'activate',
            LABEL: 'Activate',
        },
        UPDATE: {
            COLOUR: 'orange',
            TWO_TONE_COLOUR: '#FFA500',
            KEY: 'update',
            LABEL: 'Update',
        },
    },
    ROUTES: {
        ACCOUNT: '/settings',
        AUTH: '/auth',
        CONTEST: '/contests',
        HOME: '/home',
        LOGIN: '/login',
        LOGOUT: '/logout',
        NOTIFICATION: '/notifications',
        REGISTER: '/register',
        WAGER: '/wagers',
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
        },
    },
};

export default constants;
