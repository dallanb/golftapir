// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { CoursesCreatePageInterface } from './types';
import { CoursesCreatePageTypes } from './actions';

/* ------------- Initial State ------------- */
const INITIAL_STATE: CoursesCreatePageInterface = {
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
    [CoursesCreatePageTypes.INIT]: init,
    [CoursesCreatePageTypes.INIT_SUCCESS]: initSuccess,
    [CoursesCreatePageTypes.INIT_FAILURE]: initFailure,
    [CoursesCreatePageTypes.TERMINATE]: terminate,
    [CoursesCreatePageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
