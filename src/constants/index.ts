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
            KEY: 'pending',
        },
        READY: {
            COLOUR: 'geekblue',
            KEY: 'ready',
        },
        ACTIVE: {
            COLOUR: 'green',
            KEY: 'active',
        },
        INACTIVE: {
            COLOUR: 'red',
            KEY: 'inactive',
        },
        COMPLETED: {
            COLOUR: 'blue',
            KEY: 'completed',
        },
        APPROVED: {
            COLOUR: 'purple',
            KEY: 'approved',
        },
        SPECTATOR: {
            COLOUR: 'brown',
            KEY: 'spectator',
        },
        OWNER: {
            COLOUR: 'volcano',
            KEY: 'owner',
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
        COURSES: 'courses',
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
            PARTICIPANT_INACTIVE: 'participant_inactive',
            PARTICIPANT_ACTIVE: 'participant_active',
            PARTICIPANT_COMPLETED: 'participant_completed',
            CONTEST_READY: 'contest_ready',
            CONTEST_INACTIVE: 'contest_inactive',
            CONTEST_ACTIVE: 'contest_active',
            CONTEST_COMPLETED: 'contest_completed',
        },
        COURSES: {
            COURSE_APPROVED: 'course_approved',
        },
        MEMBERS: {
            AVATAR_CREATED: 'avatar_created',
            AVATAR_UPDATED: 'avatar_updated',
            AVATAR_DELETED: 'avatar_deleted',
            DISPLAY_NAME_UPDATED: 'display_name_updated',
            COUNTRY_UPDATED: 'country_updated',
            STAT_UPDATED: 'stat_updated',
            WALLET_UPDATED: 'wallet_updated',
        },
        LEAGUES: {
            MEMBER_CREATED: 'member_created',
            MEMBER_PENDING: 'member_pending',
            MEMBER_ACTIVE: 'member_active',
            MEMBER_INACTIVE: 'member_inactive',
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
    ROLE: {
        INACTIVE: 0,
        INVITED: 1,
        PENDING: 2,
        ACTIVE: 3,
    },
};

export default constants;
