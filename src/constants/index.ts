const constants = {
    TARGETS: {
        ACCOUNT_PAGE: 'ACCOUNT_PAGE',
        CONTEST_PAGE: 'CONTEST_PAGE',
        CONTESTS_PAGE: 'CONTESTS_PAGE',
        CONTESTS_CREATE_PAGE: 'CONTESTS_CREATE_PAGE',
        HOME_PAGE: 'HOME_PAGE',
        LOGIN_PAGE: 'LOGIN_PAGE',
        REGISTER_PAGE: 'REGISTER_PAGE',
    },
    STATUS: {
        PENDING: {
            COLOUR: 'orange',
        },
        ACTIVE: {
            COLOUR: 'green',
        },
        INACTIVE: {
            COLOUR: 'red',
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
    },
};

export default constants;
