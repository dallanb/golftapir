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
        MATCHUP: {
            TWO_TONE_COLOUR: '#604',
            KEY: 'matchup',
            LABEL: 'Matchup',
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
        ACCOUNT: '/settings',
        AUTH: '/auth',
        COMPETITOR: '/competitor',
        COMPETITORS: '/competitors',
        CONTEST: '/contest',
        CONTESTS: '/contests',
        CONTESTS_CREATE: '/contests/create',
        CONTEST_UPDATE: '/contest/update',
        CONTEST_MATCHUP: '/contest/matchup',
        HOME: '/home',
        LOGIN: '/login',
        LOGOUT: '/logout',
        NOTIFICATION: '/notifications',
        REGISTER: '/register',
        WAGER: '/wager',
        WAGERS: '/wagers',
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
};

export default constants;
