// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ContestModuleTypes } from './actions';

/* ------------- Interface ------------- */
export interface ContestModuleInterface {
    readonly isFetching: boolean;
    readonly isRefreshing: boolean;
    readonly isInitialized: boolean;
    readonly isTerminating: boolean;
    readonly err?: Error;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestModuleInterface = {
    isFetching: false,
    isRefreshing: false,
    isInitialized: false,
    isTerminating: false,
    err: undefined,
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
        isInitialized: true,
        err: null,
    });
}

function initFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isFetching: false,
        isInitialized: true,
        err,
    });
}

function refresh(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isRefreshing: true,
        err: null,
    });
}

function refreshSuccess(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isRefreshing: false,
    });
}

function refreshFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isRefreshing: false,
        err,
    });
}

function terminate(state: any) {
    return Immutable.merge(state, {
        isTerminating: true,
    });
}

function terminateSuccess() {
    return INITIAL_STATE;
}

function terminateFailure(state: any, { err }: any) {
    return Immutable.merge(state, { ...INITIAL_STATE, err });
}

function set(state: any, { data }: any) {
    return Immutable.merge(state, {
        ...data,
    });
}

const HANDLERS = {
    [ContestModuleTypes.INIT]: init,
    [ContestModuleTypes.INIT_SUCCESS]: initSuccess,
    [ContestModuleTypes.INIT_FAILURE]: initFailure,
    [ContestModuleTypes.REFRESH]: refresh,
    [ContestModuleTypes.REFRESH_SUCCESS]: refreshSuccess,
    [ContestModuleTypes.REFRESH_FAILURE]: refreshFailure,
    [ContestModuleTypes.TERMINATE]: terminate,
    [ContestModuleTypes.TERMINATE_SUCCESS]: terminateSuccess,
    [ContestModuleTypes.TERMINATE_FAILURE]: terminateFailure,
    [ContestModuleTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
