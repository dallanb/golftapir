// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { MemberAppTypes } from './actions';

/* ------------- Interface ------------- */
export interface MemberAppInterface {
    readonly isFetching: boolean;
    readonly isRefreshing: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: MemberAppInterface = {
    isFetching: false,
    isRefreshing: false,
    isInitialized: false,
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

function terminate() {
    return INITIAL_STATE;
}

function set(state: any, { data }: any) {
    return Immutable.merge(state, {
        ...data,
    });
}

const HANDLERS = {
    [MemberAppTypes.INIT]: init,
    [MemberAppTypes.INIT_SUCCESS]: initSuccess,
    [MemberAppTypes.INIT_FAILURE]: initFailure,
    [MemberAppTypes.REFRESH]: refresh,
    [MemberAppTypes.REFRESH_SUCCESS]: refreshSuccess,
    [MemberAppTypes.REFRESH_FAILURE]: refreshFailure,
    [MemberAppTypes.TERMINATE]: terminate,
    [MemberAppTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
