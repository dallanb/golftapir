// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { LeaguePageTypes } from './actions';
import { LeaguePageInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: LeaguePageInterface = {
    isInitialized: false,
    err: undefined,
    league: undefined,
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
    [LeaguePageTypes.INIT]: init,
    [LeaguePageTypes.INIT_SUCCESS]: initSuccess,
    [LeaguePageTypes.INIT_FAILURE]: initFailure,
    [LeaguePageTypes.TERMINATE]: terminate,
    [LeaguePageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
