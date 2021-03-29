// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ContestPageSiderCourseTypes } from './actions';
import { ContestPageSiderCourseInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestPageSiderCourseInterface = {
    isInitialized: false,
    err: undefined,
    data: undefined,
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
    [ContestPageSiderCourseTypes.INIT]: init,
    [ContestPageSiderCourseTypes.INIT_SUCCESS]: initSuccess,
    [ContestPageSiderCourseTypes.INIT_FAILURE]: initFailure,
    [ContestPageSiderCourseTypes.TERMINATE]: terminate,
    [ContestPageSiderCourseTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
