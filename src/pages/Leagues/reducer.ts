// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { LeagueTypes } from '@actions';
import { LeaguesPageTypes } from './actions';
import { LeaguesPageInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: LeaguesPageInterface = {
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
    [LeaguesPageTypes.INIT]: init,
    [LeaguesPageTypes.INIT_SUCCESS]: initSuccess,
    [LeaguesPageTypes.INIT_FAILURE]: initFailure,
    [LeaguesPageTypes.TERMINATE]: terminate,
    [LeaguesPageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
