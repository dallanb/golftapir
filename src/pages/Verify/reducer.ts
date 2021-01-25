// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { AuthTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';
import { VerifyPageTypes } from './actions';
import { VerifyPageInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: VerifyPageInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    title: CONSTANTS.PAGES.VERIFY.TITLE,
    description: CONSTANTS.PAGES.VERIFY.DESCRIPTION,
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
    [VerifyPageTypes.INIT]: init,
    [VerifyPageTypes.INIT_SUCCESS]: initSuccess,
    [VerifyPageTypes.INIT_FAILURE]: initFailure,
    [VerifyPageTypes.TERMINATE]: terminate,
    [VerifyPageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
