import CONSTANTS from '@locale/en-CA';

const constants = {
    APPS: {
        MEMBER_APP: 'member_app',
        LEAGUE_APP: 'league_app',
        AUTH_APP: 'auth_app',
    },
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
            TWO_TONE_COLOUR: 'rgba(19,115,204, 1);',
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
            TWO_TONE_COLOUR: 'rgba(19,115,204, 1);',
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
    TOPICS: {
        AUTH: 'auth',
        ACCOUNTS: 'accounts',
        CONTESTS: 'contests',
        LEAGUES: 'leagues',
        MEMBERS: 'members',
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
            PARTICIPANT_COMPLETED: 'participant_completed',
            CONTEST_READY: 'contest_ready',
            CONTEST_ACTIVE: 'contest_active',
        },
        MEMBERS: {
            MEMBER_INVITED: 'member_invited',
            MEMBER_ACTIVE: 'member_active',
        },
        SCORES: {
            STROKE_UPDATE: 'stroke_update',
        },
    },
    S3_FOLDERS: {
        MEMBER: {
            AVATAR: '/member/avatars/',
        },
        CONTEST: {
            AVATAR: '/contest/avatars/',
        },
        LEAGUE: {
            AVATAR: '/league/avatars/',
        },
    },
    AVATAR: {
        WIDTH: 256,
        HEIGHT: 256,
    },
    SCORECARD: {
        ROUND: 'Round',
        HOLE: 'Hole',
        PAR: 'Par',
        STATUS: 'Status',
    },
    HOLE_SCORE: {
        DOUBLE_BOGEY: 2,
        BOGEY: 1,
        PAR: 0,
        BIRDIE: -1,
        EAGLE: -2,
    },
};

export default constants;
