// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { CompetitorPageTypes } from './actions';
import { CompetitorPageInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: CompetitorPageInterface = {
    isInitialized: false,
    err: undefined,
    member: undefined,
};

/* ------------- Reducers ------------- */
function init(state = INITIAL_STATE) {
    return Immutable.merge(state, {
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
    [CompetitorPageTypes.INIT]: init,
    [CompetitorPageTypes.INIT_SUCCESS]: initSuccess,
    [CompetitorPageTypes.INIT_FAILURE]: initFailure,
    [CompetitorPageTypes.TERMINATE]: terminate,
    [CompetitorPageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
