// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { LeagueMembersPageTypes } from './actions';
import { LeagueMembersPageInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: LeagueMembersPageInterface = {
    isInitialized: false,
    err: undefined,
};

/* ------------- Reducers ------------- */
function init(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        ...INITIAL_STATE,
        isInitialized: false,
        err: null,
    });
}

function initSuccess(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isInitialized: true,
        err: null,
    });
}

function initFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
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
    [LeagueMembersPageTypes.INIT]: init,
    [LeagueMembersPageTypes.INIT_SUCCESS]: initSuccess,
    [LeagueMembersPageTypes.INIT_FAILURE]: initFailure,
    [LeagueMembersPageTypes.TERMINATE]: terminate,
    [LeagueMembersPageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
