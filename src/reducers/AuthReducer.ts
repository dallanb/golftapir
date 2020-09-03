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
        refreshSuccess: null,
        refreshFailure: ['err'],
    },
    {
        prefix: 'AUTH_',
    }
);
export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
const INITIAL_STATE = {
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

function registerSuccess(state: any) {
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
function refresh(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isFetching: true,
        err: null,
    });
}

function refreshSuccess(state: any, {}: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err: null,
        isLoggedIn: true,
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
