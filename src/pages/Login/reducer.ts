// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import CONSTANTS from '@locale/en-CA';
import { LoginPageTypes } from './actions';
import { createReducer } from 'reduxsauce';
import { LoginPageInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: LoginPageInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    title: CONSTANTS.PAGES.LOGIN.TITLE,
    description: CONSTANTS.PAGES.LOGIN.DESCRIPTION,
    formInitialValues: {},
};

/* ------------- Reducers ------------- */
function init(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isFetching: true,
        isInitialized: false,
        err: null,
    });
}

function initSuccess(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isFetching: false,
        isInitialized: true,
        err: null,
    });
}

function initFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isFetching: false,
        isInitialized: false,
        err,
    });
}

function terminate() {
    return INITIAL_STATE;
}

function set(state: any, { data }: any) {
    return Immutable.merge(state, {
        ...data,
    });
}

const HANDLERS = {
    [LoginPageTypes.INIT]: init,
    [LoginPageTypes.INIT_SUCCESS]: initSuccess,
    [LoginPageTypes.INIT_FAILURE]: initFailure,
    [LoginPageTypes.TERMINATE]: terminate,
    [LoginPageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
