const CONSTANTS = {
    COMMON: {
        ACTIONS: 'Actions',
        BALANCE: 'Total Balance',
        LOG_OUT: 'Log out',
        LOGOUT: 'Logout',
        MESSAGE: 'Message',
        PLACE: 'Place',
        PROFILE: 'Profile',
        SEARCH: 'Search',
    },
    FORM: {
        UPLOAD: 'Upload',
        SUBMIT: 'Submit',
    },
    ACCOUNT: {
        SUCCESS: {
            UPDATE: 'Account update successful!',
            ASSIGN_AVATAR: 'Avatar update successful!',
            DELETE_AVATAR: 'Avatar deletion successful!',
        },
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
            VERIFY: 'Verification successful!',
            FORGOT_PASSWORD: 'Forgot Password Email delivered!',
            RESET_PASSWORD: 'Password Reset successful!',
        },
        ERROR: {
            LOGIN: 'Login unsuccessful',
            LOGIN_CONFIRM_EMAIL:
                'Login unsuccessful. Check you email address for account activation instructions.',
            LOGOUT: 'Logout unsuccessful',
            REGISTER: 'Registration unsuccessful',
            SESSION: 'Session expired',
            VERIFY: 'Verification unsuccessful',
            FORGOT_PASSWORD: 'Forgot Password Email unsuccessful',
            RESET_PASSWORD: 'Password Reset unsuccessful',
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
            UPDATE: 'Contest update unsuccessful',
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
        SUCCESS: {
            CREATE: 'Course creation successful!',
        },
        ERROR: {
            FETCH: 'Error fetching Course information',
            FETCH_ALL: 'Error fetching Courses information',
            SEARCH_ALL: 'Error searching Courses information',
            CREATE: 'Course creation unsuccessful',
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
            UPDATE: 'League update unsuccessful',
            MEMBER_INVITE: 'Error sending invitation',
            MEMBER_INVITE_DUPLICATE: 'Member already invited',
        },
    },
    MEMBER: {
        SUCCESS: {
            INVITE: 'Invitation sent!',
            UPDATE: 'Member update successful!',
            ASSIGN_AVATAR: 'Member avatar update successful!',
            DELETE_AVATAR: 'Member avatar deletion successful!',
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
            UPDATE: 'Score update unsuccessful',
            UPDATE_SCORE: 'Score update unsuccessful',
            UPDATE_SHEET: 'Score sheet update unsuccessful',
            UPDATE_HOLE: 'Score hole update unsuccessful',
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
            BUTTONS: {
                FORGOT_PASSWORD: { TEXT: '', BUTTON: 'Forgot your password?' },
                REGISTER: {
                    TEXT: "Don't have an account yet?",
                    BUTTON: 'Register',
                },
            },
            FORM: {
                SUBMIT: 'Login',
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
            BUTTONS: {
                LOGIN: {
                    TEXT: 'Already have an account?',
                    BUTTON: 'Login',
                },
            },
            FORM: {
                SUBMIT: 'Register',
                LABELS: {
                    USERNAME: 'Username',
                    EMAIL: 'Email',
                    CONFIRM_EMAIL: 'Confirm Email',
                    PASSWORD: 'Password',
                    CONFIRM_PASSWORD: 'Confirm Password',
                    DISPLAY_NAME: 'Display Name',
                    COUNTRY: 'Country',
                },
                VALIDATION: {
                    USERNAME_REQUIRED: 'Please input your username!',
                    EMAIL_REQUIRED: 'Please input your email address!',
                    EMAIL_TYPE: 'Please input a valid email address',
                    CONFIRM_EMAIL_REQUIRED:
                        'Please confirm your email address!',
                    CONFIRM_EMAIL_MISMATCH:
                        'The two emails that you entered do not match!',
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
            EMAIL_MODAL: {
                TITLE: "You're almost done!",
                DESCRIPTION:
                    'Your account was successfully created! Thank you for choosing Golf Tapir. Please check you email inbox for account activation instructions.',
            },
        },
        VERIFY: {
            TITLE: 'Account Verification',
            DESCRIPTION: 'Verify your email address',
        },
        FORGOT_PASSWORD: {
            TITLE: 'Forgot Password',
            DESCRIPTION: 'Recover forgotten password',
            BUTTONS: {
                LOGIN: {
                    TEXT: 'Already have an account?',
                    BUTTON: 'Login',
                },
            },
            FORM: {
                SUBMIT: 'Recover',
                LABELS: {
                    EMAIL: 'Email',
                },
                VALIDATION: {
                    EMAIL_REQUIRED: 'Please input an email address!',
                    EMAIL_TYPE: 'Please input a valid email address',
                },
            },
        },
        RESET_PASSWORD: {
            TITLE: 'Reset Password',
            DESCRIPTION: 'Set a new password',
            FORM: {
                SUBMIT: 'Reset',
                LABELS: {
                    PASSWORD: 'New Password',
                    CONFIRM_PASSWORD: 'Confirm Password',
                },
                VALIDATION: {
                    PASSWORD_REQUIRED: 'Please input your password!',
                    CONFIRM_PASSWORD_REQUIRED: 'Please confirm your password!',
                    CONFIRM_PASSWORD_MISMATCH:
                        'The two passwords that you entered do not match!',
                },
            },
        },
        HOME: {
            TITLE: 'Home',
            DESCRIPTION: 'Home Page',
            LEAGUES: {
                TITLE: 'Leagues List',
                EMPTY: 'No Leagues',
            },
            MEMBER: 'Player Card',
            CREATE_LEAGUE: 'Create League',
        },
        LEAGUE_HOME: {
            TITLE: 'League Home',
            DESCRIPTION: 'League Home Page',
            LEAGUE: 'League Info',
            STANDINGS: {
                TITLE: 'Member Standings',
                TABLE: {
                    COUNTRY: 'Country',
                    MEMBER: 'Member',
                    EVENTS: 'Contests',
                    WINS: 'Wins',
                    WINNINGS: 'Winnings',
                },
            },
            STATS: {
                TITLE: 'My Stats',
                WINS: 'Wins',
                WIN_PERCENTAGE: 'Win Percentage',
                WINNINGS: 'Winnings',
                FORM: {
                    LABELS: {
                        WINS: 'Wins',
                        WIN_PERCENTAGE: 'Win Percentage',
                        WINNINGS: 'Winnings',
                    },
                },
            },
            FORM: {
                LABELS: {
                    NAME: 'Name',
                    CREATED_AT: 'Est.',
                    AVATAR: 'Avatar',
                    STATUS: 'Status',
                },
            },
            CALENDAR: {
                TITLE: 'Upcoming Events',
            },
        },
        CONTEST: {
            TITLE: 'Contest',
            DESCRIPTION: 'Contest Info',
            INFO: 'Contest Info',
            COURSE: 'Course',
            WINNER: 'Winner',
            PAYOUT: 'Payout',
            PENDING_PARTICIPANTS: 'Pending Participants',
            FORM: {
                LABELS: {
                    NAME: 'Name',
                    START: 'Start Time',
                    AVATAR: 'Avatar',
                    STATUS: 'Status',
                    PAYOUT: 'Total Payout',
                    BUY_IN: 'Buy In',
                },
            },
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
            LEADERBOARD: {
                TITLE: 'Leaderboard',
                TABLE: {
                    POSITION: 'Pos',
                    COUNTRY: 'Country',
                    PARTICIPANT: 'Member',
                    SCORE: 'Score',
                    STROKES: 'Strokes',
                },
            },
            SCORECARD: {
                HOLE: 'Hole',
                PAR: 'Par',
                DISTANCE: 'Dist',
                EAGLE: 'Eagle',
                BIRDIE: 'Birdie',
                BOGEY: 'Bogey',
                DOUBLE_BOGEY: 'Double Bogey',
            },
        },
        CONTESTS: {
            TITLE: 'Contests',
            DESCRIPTION: 'View Contests',
            SEARCH: 'Search Contests',
            LIST: {
                TITLE: 'Contests List',
                EMPTY: 'No Contests',
                LEADER: 'Leader',
                WINNER: 'Winner',
            },
            CREATE_CONTEST: 'Create Contest',
        },
        NOTIFICATIONS: {
            TITLE: 'Notifications',
            DESCRIPTION: 'View Notifications',
            LIST: {
                TITLE: 'Notifications List',
                EMPTY: 'No Notifications',
            },
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
                TITLE: 'Create Contest',
                SUBMITTING: 'Creating Contest...',
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
                    PARTICIPANT_MINIMUM: 'At least 2 Participants required',
                    BUY_IN_REQUIRED: 'Buy in required',
                    BUY_IN_SINGLE_PARTICIPANT:
                        'Buy in cannot be set in a single participant content',
                    BUY_IN_WALLET_LIMIT:
                        'Buy in may not be greater than balance of Wallet',
                    PAYOUT_REQUIRED: 'Payout required',
                    PAYOUT_100: 'Payout must equal 100%',
                    PAYOUT_BUY_IN_REQUIRED:
                        'Buy in must be set to apply payout',
                },
            },
        },
        CONTEST_UPDATE: {
            TITLE: 'Contest Update',
            DESCRIPTION: 'Update Contest',
            FORM: {
                TITLE: 'Update Contest',
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
        COURSES_CREATE: {
            TITLE: 'Create Course',
            FORM: {
                LABELS: {
                    NAME: 'Name',
                    ADDRESS_LINE_1: 'Address Line 1',
                    ADDRESS_LINE_2: 'Address Line 2',
                    CITY: 'City',
                    PROVINCE: 'Province/State',
                    COUNTRY: 'Country',
                    HOLE: 'Hole',
                },
                VALIDATION: {
                    NAME_REQUIRED: 'Name is required',
                    NAME_MAX_LENGTH: 'Name must be less than 50 characters',
                    LINE_1_REQUIRED: 'Address is required',
                    CITY_REQUIRED: 'City is required',
                    PROVINCE_REQUIRED: 'Province is required',
                    COUNTRY_REQUIRED: 'Country is required',
                },
            },
            SUCCESS_MODAL: {
                TITLE: 'Thank you for adding a course',
                DESCRIPTION:
                    ' will be added to your balance after the course has been approved by an administrator',
            },
        },
        ACCOUNT: {
            TITLE: 'Account',
            DESCRIPTION: 'Update League Settings',
            FORM: {
                TITLE: 'Account Settings',
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
                CONTESTS: 'Contests',
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
            LIST: {
                EMPTY: 'No Contests',
            },
        },
        MEMBERS: {
            TITLE: 'Members',
            DESCRIPTION: 'View Members',
            INVITES: 'Invites',
            LIST: {
                TITLE: 'Members List',
                EMPTY: 'No Members',
                MEMBER_SINCE: 'Member Since',
            },
            INVITE_FORM: {
                TITLE: 'Invite',
                SEARCH: 'Invite Members',
            },
            INVITE: {
                WAIT: 'Updating League Member...This may take a few moments...',
            },
        },
        MEMBERS_CREATE: {
            TITLE: 'Members',
            DESCRIPTION: 'Invite Member',
            FORM: {
                TITLE: 'Invite Member',
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
            CREATE_LEAGUE: 'Create League',
        },
        LEAGUES_CREATE: {
            TITLE: 'Leagues',
            DESCRIPTION: 'Create League',
            FORM: {
                TITLE: 'Create League',
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
                TITLE: 'Settings',
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
    COMPONENTS: {
        WALLET: {
            ADD_MODAL: {
                TITLE: 'Add Funds',
                DESCRIPTION:
                    'Would you like to add a course to Golf Tapir for ',
                ADD: 'Add',
            },
        },
        UPLOAD: {
            ERROR: {
                IMAGE_TYPE: 'You can only upload JPG/PNG file!',
                IMAGE_SIZE: 'Image must smaller than 1MB!'
            }
        }
    },
};

export default CONSTANTS;
