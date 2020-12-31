// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { MemberAppTypes } from './actions';

/* ------------- Interface ------------- */
export interface MemberAppInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly me: any;
    readonly leagues: any[];
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: MemberAppInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    me: undefined,
    leagues: [],
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
    [MemberAppTypes.TERMINATE]: terminate,
    [MemberAppTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
