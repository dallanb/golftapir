// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { CompetitorsPageTypes } from './actions';
import { CompetitorsPageInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: CompetitorsPageInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    title: CONSTANTS.PAGES.COMPETITORS.TITLE,
    description: CONSTANTS.PAGES.COMPETITORS.DESCRIPTION,
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
    [CompetitorsPageTypes.INIT]: init,
    [CompetitorsPageTypes.INIT_SUCCESS]: initSuccess,
    [CompetitorsPageTypes.INIT_FAILURE]: initFailure,
    [CompetitorsPageTypes.TERMINATE]: terminate,
    [CompetitorsPageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
