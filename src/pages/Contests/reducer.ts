// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { ContestTypes } from '@actions';
import { ContestsPageTypes } from './actions';
import { ContestsPageInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestsPageInterface = {
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
    [ContestsPageTypes.INIT]: init,
    [ContestsPageTypes.INIT_SUCCESS]: initSuccess,
    [ContestsPageTypes.INIT_FAILURE]: initFailure,
    [ContestsPageTypes.TERMINATE]: terminate,
    [ContestsPageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
