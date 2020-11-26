// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { CompetitorsPageTypes } from './actions';
import { CompetitorsPageInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: CompetitorsPageInterface = {
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
    [CompetitorsPageTypes.INIT]: init,
    [CompetitorsPageTypes.INIT_SUCCESS]: initSuccess,
    [CompetitorsPageTypes.INIT_FAILURE]: initFailure,
    [CompetitorsPageTypes.TERMINATE]: terminate,
    [CompetitorsPageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
