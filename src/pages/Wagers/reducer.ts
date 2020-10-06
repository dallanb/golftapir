// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { WagerTypes } from '@actions';
import { WagersPageTypes } from './actions';
import { WagersPageInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: WagersPageInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    title: CONSTANTS.PAGES.WAGERS.TITLE,
    description: CONSTANTS.PAGES.WAGERS.DESCRIPTION,
    wagersList: {
        data: undefined,
        metadata: undefined,
        isFetching: false,
        append: false,
    },
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

function fetchWagers(state: any, { append = false }: any) {
    return Immutable.merge(state, {
        wagersList: {
            ...state.wagersList,
            isFetching: true,
            append,
        },
    });
}

function fetchWagersSuccess(
    state: any,
    { data, metadata, isFetching = false }: any
) {
    return Immutable.merge(state, {
        wagersList: {
            isFetching,
            data: state.wagersList.append
                ? [...state.wagersList.data, ...data]
                : data,
            metadata,
        },
    });
}

function fetchWagersFailure(state: any) {
    return Immutable.merge(state, {
        wagersList: {
            ...state.wagersList,
            isFetching: false,
        },
    });
}

const HANDLERS = {
    [WagersPageTypes.INIT]: init,
    [WagersPageTypes.INIT_SUCCESS]: initSuccess,
    [WagersPageTypes.INIT_FAILURE]: initFailure,
    [WagersPageTypes.TERMINATE]: terminate,
    [WagersPageTypes.SET]: set,
    [WagerTypes.FETCH_WAGERS]: fetchWagers,
    [WagerTypes.FETCH_WAGERS_SUCCESS]: fetchWagersSuccess,
    [WagerTypes.FETCH_WAGERS_FAILURE]: fetchWagersFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
