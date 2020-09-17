// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import CONSTANTS from '@locale/en-CA';
import { RegisterPageTypes } from './actions';
import { createReducer } from 'reduxsauce';
import { RegisterPageInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: RegisterPageInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    title: CONSTANTS.PAGES.REGISTER.TITLE,
    description: CONSTANTS.PAGES.REGISTER.DESCRIPTION,
    formInitialValues: {},
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
    [RegisterPageTypes.INIT]: init,
    [RegisterPageTypes.INIT_SUCCESS]: initSuccess,
    [RegisterPageTypes.INIT_FAILURE]: initFailure,
    [RegisterPageTypes.TERMINATE]: terminate,
    [RegisterPageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
