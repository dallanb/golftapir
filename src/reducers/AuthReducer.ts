// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        ping: null,
        login: ['email', 'password'],
        loginSuccess: ['data'],
        loginFailure: ['err'],
        register: ['email', 'username', 'password'],
        registerSuccess: null,
        registerFailure: ['err'],
        refresh: null,
        refreshSuccess: ['data'],
        refreshFailure: ['err'],
    },
    {
        prefix: 'AUTH_',
    }
);
export const AuthTypes = Types;
export default Creators;

/* ------------- Interface ------------- */
export interface AuthInterface {
    readonly data: any;
    readonly isFetching: boolean;
    readonly isSubmitting: boolean;
    readonly isLoggedIn: boolean;
    readonly forceLogout: boolean;
    readonly err?: Error;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: AuthInterface = {
    data: undefined,
    isFetching: false,
    isSubmitting: false,
    isLoggedIn: false,
    forceLogout: false,
    err: undefined,
};

/* ------------- Reducers ------------- */
function login(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isSubmitting: true,
        err: null,
    });
}

function loginSuccess(state: any, { data }: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err: null,
        isLoggedIn: true,
        forceLogout: false,
        data,
    });
}

function loginFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err,
    });
}

function register(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isSubmitting: true,
        err: null,
    });
}

function registerSuccess(state: any, { data }: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err: null,
        isLoggedIn: true,
        forceLogout: false,
        data,
    });
}

function registerFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err,
    });
}
function refresh(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isFetching: true,
        err: null,
    });
}

function refreshSuccess(state: any, { data }: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        isFetching: false,
        err: null,
        isLoggedIn: true,
        data,
    });
}

function refreshFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        forceLogout: true,
        isSubmitting: false,
        err,
    });
}

const HANDLERS = {
    [Types.LOGIN]: login,
    [Types.LOGIN_SUCCESS]: loginSuccess,
    [Types.LOGIN_FAILURE]: loginFailure,
    [Types.REGISTER]: register,
    [Types.REGISTER_SUCCESS]: registerSuccess,
    [Types.REGISTER_FAILURE]: registerFailure,
    [Types.REFRESH]: refresh,
    [Types.REFRESH_SUCCESS]: refreshSuccess,
    [Types.REFRESH_FAILURE]: refreshFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
