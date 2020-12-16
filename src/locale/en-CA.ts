const CONSTANTS = {
    ACCOUNT: {
        ERROR: {
            UPDATE: 'Error updating Contest information',
            ASSIGN_AVATAR: 'Error updating Contest avatar',
            FETCH: 'Error fetching Contest information',
            FETCH_MEMBERSHIP: 'Error fetching Contest Membership information',
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
            FETCH_ALL: 'Error fetching Contests information',
            FETCH_MATERIALIZED: 'Error fetching Contest information',
            FETCH_ALL_MATERIALIZED: 'Error fetching Contests information',
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
            FETCH_CONTEST_RESULTS: 'Error fetching Contest results',
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
                    FIRST_NAME: 'First Name',
                    LAST_NAME: 'Last Name',
                },
                VALIDATION: {
                    USERNAME_REQUIRED: 'Please input your username!',
                    EMAIL_REQUIRED: 'Please input your email address!',
                    PASSWORD_REQUIRED: 'Please input your password!',
                    CONFIRM_PASSWORD_REQUIRED: 'Please confirm your password!',
                    CONFIRM_PASSWORD_MISMATCH:
                        'The two passwords that you entered do not match!',
                    FIRST_NAME_MAX_LENGTH:
                        'First Name must be less than 100 characters',
                    FIRST_NAME_REQUIRED: 'First Name is required',
                    LAST_NAME_MAX_LENGTH:
                        'Last Name must be less than 100 characters',
                    LAST_NAME_REQUIRED: 'Last Name is required',
                },
            },
        },
        HOME: {
            TITLE: 'Home',
            DESCRIPTION: 'Home Page',
        },
        CONTEST: {
            DESCRIPTION: 'Contest Info',
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
                    DESCRIPTION: 'Contest complete.',
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
            DESCRIPTION: 'Create Contest',
            FORM: {
                LABELS: {
                    NAME: 'Name',
                    AVATAR: 'Avatar',
                    START_TIME: 'Start Time',
                    COURSE: 'Course',
                    PARTICIPANTS: 'Participants',
                },
                VALIDATION: {
                    NAME_REQUIRED: 'Name is a required field',
                    START_TIME_REQUIRED: 'Start Time is a required field',
                    COURSE_REQUIRED: 'Course is a required field',
                },
            },
        },
        CONTEST_UPDATE: {
            TITLE: '',
            DESCRIPTION: 'Update Contest',
            FORM: {
                LABELS: {
                    NAME: 'Name',
                    AVATAR: 'Avatar',
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
            DESCRIPTION: 'Update Contest Settings',
            FORM: {
                LABELS: {
                    AVATAR: 'Avatar',
                    USERNAME: 'Username',
                    EMAIL: 'Email',
                    FIRST_NAME: 'First Name',
                    LAST_NAME: 'Last Name',
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
                    FIRST_NAME_MAX_LENGTH:
                        'First Name must be less than 100 characters',
                    FIRST_NAME_REQUIRED: 'First Name is required',
                    LAST_NAME_MAX_LENGTH:
                        'Last Name must be less than 100 characters',
                    LAST_NAME_REQUIRED: 'Last Name is required',
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
        WAGERS: {
            TITLE: 'Wagers',
            DESCRIPTION: 'View Wagers',
        },
    },
};

export default CONSTANTS;
