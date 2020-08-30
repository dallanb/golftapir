// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        login: ['email', 'password'],
        loginSuccess: null,
        loginFailure: ['err'],
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
    err: undefined,
};

/* ------------- Reducers ------------- */
function login(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isSubmitting: true,
        err: null,
    });
}

function loginSuccess(state: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err: null,
    });
}

function loginFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err,
    });
}

const HANDLERS = {
    [Types.LOGIN]: login,
    [Types.LOGIN_SUCCESS]: loginSuccess,
    [Types.LOGIN_FAILURE]: loginFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
