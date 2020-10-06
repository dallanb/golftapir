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
        },
    },
};

export default constants;
