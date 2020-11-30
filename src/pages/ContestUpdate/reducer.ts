// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ContestUpdatePageInterface } from './types';
import { ContestUpdatePageTypes } from './actions';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestUpdatePageInterface = {
    isInitialized: false,
    isSubmitted: false,
    err: undefined,
    uuid: undefined,
    contest: undefined,
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
    [ContestUpdatePageTypes.INIT]: init,
    [ContestUpdatePageTypes.INIT_SUCCESS]: initSuccess,
    [ContestUpdatePageTypes.INIT_FAILURE]: initFailure,
    [ContestUpdatePageTypes.TERMINATE]: terminate,
    [ContestUpdatePageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
