// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { BaseTypes } from './actions';
import { AccountTypes } from '@actions';

/* ------------- Interface ------------- */
export interface LeagueAppInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly me: any;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: LeagueAppInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    me: undefined,
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
    [BaseTypes.INIT]: init,
    [BaseTypes.INIT_SUCCESS]: initSuccess,
    [BaseTypes.INIT_FAILURE]: initFailure,
    [BaseTypes.TERMINATE]: terminate,
    [BaseTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
