// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ContestsCreatePageInterface } from './types';
import { ContestsCreatePageTypes } from './actions';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestsCreatePageInterface = {
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
    [ContestsCreatePageTypes.INIT]: init,
    [ContestsCreatePageTypes.INIT_SUCCESS]: initSuccess,
    [ContestsCreatePageTypes.INIT_FAILURE]: initFailure,
    [ContestsCreatePageTypes.TERMINATE]: terminate,
    [ContestsCreatePageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
