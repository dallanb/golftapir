// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { HomePageTypes } from './actions';
import { HomePageInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: HomePageInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    title: CONSTANTS.PAGES.HOME.TITLE,
    description: CONSTANTS.PAGES.HOME.DESCRIPTION,
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
    [HomePageTypes.INIT]: init,
    [HomePageTypes.INIT_SUCCESS]: initSuccess,
    [HomePageTypes.INIT_FAILURE]: initFailure,
    [HomePageTypes.TERMINATE]: terminate,
    [HomePageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
