// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import CONSTANTS from '@locale/en-CA';
import { LogoutPageTypes } from './actions';
import { createReducer } from 'reduxsauce';
import { LogoutPageInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: LogoutPageInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    title: CONSTANTS.PAGES.LOGOUT.TITLE,
    description: CONSTANTS.PAGES.LOGOUT.DESCRIPTION,
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
        forceLogout: false,
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
    [LogoutPageTypes.INIT]: init,
    [LogoutPageTypes.INIT_SUCCESS]: initSuccess,
    [LogoutPageTypes.INIT_FAILURE]: initFailure,
    [LogoutPageTypes.TERMINATE]: terminate,
    [LogoutPageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
