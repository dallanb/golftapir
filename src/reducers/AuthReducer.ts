// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { AuthTypes } from '@actions';

/* ------------- Interface ------------- */
export interface AuthInterface {
    readonly data: any;
    readonly isFetching: boolean;
    readonly isSubmitting: boolean;
    readonly isVerifying: boolean;
    readonly isLoggedIn: boolean;
    readonly isVerified?: boolean;
    readonly forceLogout: boolean;
    readonly err?: Error;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: AuthInterface = {
    data: undefined,
    isFetching: false,
    isSubmitting: false,
    isVerifying: false,
    isLoggedIn: false,
    isVerified: undefined,
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
    });
}

function registerFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err,
    });
}

function verify(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isVerifying: true,
        isVerified: undefined,
    });
}

function verifySuccess(state: any) {
    return Immutable.merge(state, {
        isVerifying: false,
        isVerified: true,
    });
}

function verifyFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        err,
        isVerifying: false,
        isVerified: false,
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
        forceLogout: false,
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

function logout(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isSubmitting: true,
        err: null,
    });
}

function logoutSuccess(state: any) {
    return Immutable.merge(state, {
        ...INITIAL_STATE,
        isSubmitting: false,
        err: null,
        isLoggedIn: false,
        forceLogout: true,
    });
}

function logoutFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err,
    });
}

const HANDLERS = {
    [AuthTypes.LOGIN]: login,
    [AuthTypes.LOGIN_SUCCESS]: loginSuccess,
    [AuthTypes.LOGIN_FAILURE]: loginFailure,
    [AuthTypes.REGISTER]: register,
    [AuthTypes.REGISTER_SUCCESS]: registerSuccess,
    [AuthTypes.REGISTER_FAILURE]: registerFailure,
    [AuthTypes.VERIFY]: verify,
    [AuthTypes.VERIFY_SUCCESS]: verifySuccess,
    [AuthTypes.VERIFY_FAILURE]: verifyFailure,
    [AuthTypes.REFRESH]: refresh,
    [AuthTypes.REFRESH_SUCCESS]: refreshSuccess,
    [AuthTypes.REFRESH_FAILURE]: refreshFailure,
    [AuthTypes.LOGOUT]: logout,
    [AuthTypes.LOGOUT_SUCCESS]: logoutSuccess,
    [AuthTypes.LOGOUT_FAILURE]: logoutFailure,
};

export default createReducer(INITIAL_STATE, HANDLERS);
