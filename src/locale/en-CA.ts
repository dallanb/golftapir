const CONSTANTS = {
    FORM: {
        UPLOAD: 'Upload',
    },
    ACCOUNT: {
        ERROR: {
            UPDATE: 'Error updating League information',
            ASSIGN_AVATAR: 'Error updating League avatar',
            FETCH: 'Error fetching League information',
            FETCH_MEMBERSHIP: 'Error fetching League Membership information',
            FETCH_ALL: 'Error fetching Accounts information',
            SEARCH_ALL: 'Error searching Accounts information',
            BULK_FETCH_ALL: 'Error fetch Accounts information',
        },
    },
    AUTH: {
        SUCCESS: {
            LOGIN: 'Login successful!',
            LOGOUT: 'Logout successful!',
            REGISTER: 'Registration successful!',
        },
        ERROR: {
            LOGIN: 'Login unsuccessful',
            LOGOUT: 'Logout unsuccessful',
            REGISTER: 'Registration unsuccessful',
            SESSION: 'Session expired',
        },
    },
    CONTEST: {
        SUCCESS: {
            CREATE: 'Contest creation successful!',
            UPDATE: 'Contest update successful!',
            FETCH_PARTICIPANT: 'Successfully fetched participant!',
            FETCH_PARTICIPANTS: 'Successfully fetched participants!',
            UPDATE_PARTICIPANT: 'Successfully updated!',
        },
        ERROR: {
            FETCH: 'Error fetching Contest information',
            FETCH_ALL: 'Error fetching Contest information',
            FETCH_MATERIALIZED: 'Error fetching Contest information',
            FETCH_ALL_MATERIALIZED: 'Error fetching Contest information',
            CREATE: 'Contest creation unsuccessful',
            UPDATE: 'Contest update unsuccessful!',
            FETCH_PARTICIPANT: 'Error fetch Contest participant information',
            FETCH_PARTICIPANTS: 'Error fetch Contest participants information',
            UPDATE_PARTICIPANT: 'Error updating participant',
        },
    },
    COMPETITOR: {
        SUCCESS: {},
        ERROR: {
            FETCH_CONTEST_RESULTS: 'Error fetching League results',
            FETCH_ALL: 'Error fetching Competitors information',
        },
    },
    COURSE: {
        SUCCESS: {},
        ERROR: {
            FETCH: 'Error fetching Course information',
            FETCH_ALL: 'Error fetching Courses information',
            SEARCH_ALL: 'Error searching Courses information',
        },
    },
    LEAGUE: {
        SUCCESS: {
            CREATE: 'League creation successful!',
            UPDATE: 'League update successful!',
        },
        ERROR: {
            FETCH: 'Error fetching League information',
            FETCH_ALL: 'Error fetching League information',
            CREATE: 'League creation unsuccessful',
            UPDATE: 'League update unsuccessful!',
        },
    },
    MEMBER: {
        SUCCESS: {
            INVITE: 'Invitation sent!',
        },
        ERROR: {
            FETCH: 'Error fetching Member information',
            FETCH_ALL: 'Error fetching Member information',
            UPDATE: 'Error updating Member information',
            ASSIGN_AVATAR: 'Error updating Member avatar',
            INVITE: 'Error sending invitation',
        },
    },
    NOTIFICATION: {
        SUCCESS: {
            SUBSCRIBE: 'Subscription successful!',
            UNSUBSCRIBE: 'Unsubscription successful!',
        },
        ERROR: {
            FETCH: 'Error fetching Notification information',
            FETCH_ALL: 'Error fetching Notifications information',
            UPDATE: 'Error update Notification information',
            SUBSCRIPTION_EXISTS: 'Error retrieving subscription status',
            SUBSCRIBE: 'Error subscribing to entity',
            UNSUBSCRIBE: 'Error unsubscribing from entity',
        },
    },
    SCORE: {
        SUCCESS: {},
        ERROR: {
            FETCH: 'Error fetching Score information',
            FETCH_CONTEST: 'Error fetching Score information',
            FETCH_CONTEST_SHEET: 'Error fetching Score information',
            UPDATE: 'Score update unsuccessful!',
            UPDATE_SCORE: 'Score update unsuccessful!',
            UPDATE_SHEET: 'Score sheet update unsuccessful!',
            UPDATE_HOLE: 'Score hole update unsuccessful!',
        },
    },
    SOCKET: {
        ERROR: {
            INIT: 'Error initializing Web Sockets',
            TERMINATE: 'Error terminating Web Sockets',
        },
    },
    WAGER: {
        SUCCESS: {},
        ERROR: {
            FETCH: 'Error fetching Wager information',
            FETCH_ALL: 'Error fetching Wagers information',
        },
    },
    PAGES: {
        LOGIN: {
            TITLE: 'Login',
            DESCRIPTION: 'Enter your login credentials',
            FORM: {
                LABELS: {
                    EMAIL: 'Email',
                    PASSWORD: 'Password',
                },
                VALIDATION: {
                    EMAIL_REQUIRED: 'Please input your email address!',
                    PASSWORD_REQUIRED: 'Please input your password!',
                },
            },
        },
        LOGOUT: {
            TITLE: 'Logout',
            DESCRIPTION: 'Logout',
        },
        REGISTER: {
            TITLE: 'Register',
            DESCRIPTION: 'Enter your information',
            FORM: {
                LABELS: {
                    USERNAME: 'Username',
                    EMAIL: 'Email',
                    PASSWORD: 'Password',
                    CONFIRM_PASSWORD: 'Confirm Password',
                    DISPLAY_NAME: 'Display Name',
                    COUNTRY: 'Country',
                },
                VALIDATION: {
                    USERNAME_REQUIRED: 'Please input your username!',
                    EMAIL_REQUIRED: 'Please input your email address!',
                    EMAIL_TYPE: 'Please input a valid email address',
                    PASSWORD_REQUIRED: 'Please input your password!',
                    CONFIRM_PASSWORD_REQUIRED: 'Please confirm your password!',
                    CONFIRM_PASSWORD_MISMATCH:
                        'The two passwords that you entered do not match!',
                    DISPLAY_NAME_MAX_LENGTH:
                        'Display Name must be less than 50 characters',
                    DISPLAY_NAME_REQUIRED: 'Display Name is required',
                    COUNTRY_REQUIRED: 'Country is required',
                },
            },
        },
        HOME: {
            TITLE: 'Home',
            DESCRIPTION: 'Home Page',
            LEAGUES: 'Leagues List',
            MEMBER: 'Player Card',
        },
        LEAGUE_HOME: {
            TITLE: 'League Home',
            DESCRIPTION: 'League Home Page',
            STANDINGS: 'Member Standings',
            STATS: {
                WINS: 'Wins',
                WIN_PERCENTAGE: 'Win Percentage',
                WINNINGS: 'Winnings',
            },
        },
        CONTEST: {
            TITLE: 'Contest',
            DESCRIPTION: 'League Info',
            LEADERBOARD: 'Leaderboard',
            STEPS: {
                PENDING: {
                    TITLE: 'Pending',
                    DESCRIPTION: 'Awaiting responses.',
                },
                READY: {
                    TITLE: 'Ready',
                    DESCRIPTION: 'Awaiting start time.',
                },
                ACTIVE: {
                    TITLE: 'Active',
                    DESCRIPTION: 'Awaiting contest result.',
                },
                COMPLETE: {
                    TITLE: 'Complete',
                    DESCRIPTION: 'League complete.',
                },
            },
        },
        CONTESTS: {
            TITLE: 'Contests',
            DESCRIPTION: 'View Contests',
            SEARCH: 'Search Contests',
        },
        NOTIFICATIONS: {
            TITLE: 'Notifications',
            DESCRIPTION: 'View Notifications',
        },
        COMPETITOR: {
            TITLE: 'Competitor',
            DESCRIPTION: 'View Competitor',
        },
        COMPETITORS: {
            TITLE: 'Competitors',
            DESCRIPTION: 'View Competitors',
        },
        CONTESTS_CREATE: {
            TITLE: 'Contests',
            DESCRIPTION: 'Create League',
            FORM: {
                LABELS: {
                    NAME: 'Name',
                    AVATAR: 'Avatar',
                    UPLOAD_AVATAR: 'Upload Avatar',
                    AVATAR_CROPPER_TITLE: 'Edit Avatar',
                    START_TIME: 'Start Time',
                    COURSE: 'Course',
                    PARTICIPANTS: 'Participants',
                    BUY_IN: 'Buy In',
                    PAYOUT: 'Payout',
                },
                VALIDATION: {
                    NAME_REQUIRED: 'Name is a required field',
                    START_TIME_REQUIRED: 'Start Time is a required field',
                    COURSE_REQUIRED: 'Course is a required field',
                    BUY_IN_REQUIRED: 'Buy in required',
                    PAYOUT_REQUIRED: 'Payout required',
                    PAYOUT_100: 'Payout must equal 100%',
                },
            },
        },
        CONTEST_UPDATE: {
            TITLE: 'Contest Update',
            DESCRIPTION: 'Update Contest',
            FORM: {
                LABELS: {
                    NAME: 'Name',
                    AVATAR: 'Avatar',
                    UPLOAD_AVATAR: 'Upload Avatar',
                    AVATAR_CROPPER_TITLE: 'Edit Avatar',
                    START_TIME: 'Start Time',
                    PARTICIPANTS: 'Participants',
                },
                VALIDATION: {
                    NAME_REQUIRED: 'Name is a required field',
                    START_TIME_REQUIRED: 'Start Time is a required field',
                },
            },
        },
        ACCOUNT: {
            TITLE: 'Account',
            DESCRIPTION: 'Update League Settings',
            FORM: {
                LABELS: {
                    AVATAR: 'Avatar',
                    UPLOAD_AVATAR: 'Upload Avatar',
                    AVATAR_CROPPER_TITLE: 'Edit Avatar',
                    USERNAME: 'Username',
                    EMAIL: 'Email',
                    DISPLAY_NAME: 'Display Name',
                    ADDRESS_LINE_1: 'Address Line 1',
                    ADDRESS_LINE_2: 'Address Line 2',
                    CITY: 'City',
                    PROVINCE: 'Province/State',
                    COUNTRY: 'Country',
                    POSTAL_CODE: 'Postal Code / Zip Code',
                    PHONE_NUMBER: 'Phone Number',
                    PHONE_COUNTRY_CODE: 'Phone Country Code',
                    PHONE_EXTENSION: 'Phone Extension',
                },
                VALIDATION: {
                    DISPLAY_NAME_MAX_LENGTH:
                        'Display Name must be less than 50 characters',
                    DISPLAY_NAME_REQUIRED: 'Display Name is required',
                    ADDRESS_LINE_1_REQUIRED: 'Address is required',
                    ADDRESS_CITY_REQUIRED: 'City is required',
                    ADDRESS_PROVINCE_REQUIRED: 'Province is required',
                    ADDRESS_COUNTRY_REQUIRED: 'Country is required',
                    ADDRESS_POSTAL_REQUIRED: 'Postal / Zip Code is required',
                    PHONE_NUMBER_REQUIRED: 'Phone Number is required',
                    PHONE_NUMBER_MATCHES: 'Phone Number is invalid',
                },
            },
        },
        LEAGUE: {
            TITLE: 'League',
            DESCRIPTION: 'View League',
        },
        MEMBER: {
            TITLE: 'Member',
            DESCRIPTION: 'View Member',
            TABS: {
                INFO: 'Info',
                RECENT: 'Recent Contests',
            },
            FORM: {
                LABELS: {
                    DISPLAY_NAME: 'Display Name',
                    AVATAR: 'Avatar',
                    USERNAME: 'Username',
                    EMAIL: 'Email',
                    COUNTRY: 'Country',
                },
            },
        },
        MEMBERS: {
            TITLE: 'Members',
            DESCRIPTION: 'View Members',
            SEARCH: 'Invite Members',
        },
        MEMBERS_CREATE: {
            TITLE: 'Members',
            DESCRIPTION: 'Invite Member',
            FORM: {
                LABELS: {
                    EMAIL: 'Email',
                },
                VALIDATION: {
                    EMAIL_REQUIRED: 'Please input an email address!',
                    EMAIL_TYPE: 'Please input a valid email address',
                },
            },
        },
        LEAGUES: {
            TITLE: 'Leagues',
            DESCRIPTION: 'View Leagues',
            SEARCH: 'Search League',
        },
        LEAGUES_CREATE: {
            TITLE: 'Leagues',
            DESCRIPTION: 'Create League',
            FORM: {
                LABELS: {
                    AVATAR: 'Avatar',
                    UPLOAD_AVATAR: 'Upload Avatar',
                    AVATAR_CROPPER_TITLE: 'Edit Avatar',
                    NAME: 'Name',
                    MEMBERS: 'Members',
                },
                VALIDATION: {
                    NAME_MAX_LENGTH: 'Name must be less than 50 characters',
                    NAME_REQUIRED: 'Name is required',
                },
            },
        },
        MEMBER_SETTINGS: {
            TITLE: 'Member Settings',
            DESCRIPTION: 'Update Member Settings',
            FORM: {
                LABELS: {
                    AVATAR: 'Avatar',
                    UPLOAD_AVATAR: 'Upload Avatar',
                    AVATAR_CROPPER_TITLE: 'Edit Avatar',
                    DISPLAY_NAME: 'Display Name',
                    USERNAME: 'Username',
                    EMAIL: 'Email',
                    COUNTRY: 'Country',
                },
                VALIDATION: {
                    DISPLAY_NAME_MAX_LENGTH:
                        'Display Name must be less than 50 characters',
                    DISPLAY_NAME_REQUIRED: 'Display Name is required',
                },
            },
        },
        WAGERS: {
            TITLE: 'Wagers',
            DESCRIPTION: 'View Wagers',
        },
    },
};

export default CONSTANTS;
