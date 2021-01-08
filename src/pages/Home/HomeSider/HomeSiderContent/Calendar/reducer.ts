// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { HomePageSiderContentCalendarTypes } from './actions';
import { HomePageSiderContentCalendarInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: HomePageSiderContentCalendarInterface = {
    isInitialized: false,
    err: undefined,
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

function terminate(state: any) {
    return Immutable.merge(state, {
        ...INITIAL_STATE,
    });
}

function set(state: any, { data }: any) {
    return Immutable.merge(state, {
        ...data,
    });
}

const HANDLERS = {
    [HomePageSiderContentCalendarTypes.INIT]: init,
    [HomePageSiderContentCalendarTypes.INIT_SUCCESS]: initSuccess,
    [HomePageSiderContentCalendarTypes.INIT_FAILURE]: initFailure,
    [HomePageSiderContentCalendarTypes.TERMINATE]: terminate,
    [HomePageSiderContentCalendarTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
