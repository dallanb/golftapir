// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { LeaguesCreatePageInterface } from './types';
import { LeaguesCreatePageTypes } from './actions';

/* ------------- Initial State ------------- */
const INITIAL_STATE: LeaguesCreatePageInterface = {
    isInitialized: false,
    err: undefined,
};

/* ------------- Reducers ------------- */
function init(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        ...INITIAL_STATE,
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
    [LeaguesCreatePageTypes.INIT]: init,
    [LeaguesCreatePageTypes.INIT_SUCCESS]: initSuccess,
    [LeaguesCreatePageTypes.INIT_FAILURE]: initFailure,
    [LeaguesCreatePageTypes.TERMINATE]: terminate,
    [LeaguesCreatePageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
