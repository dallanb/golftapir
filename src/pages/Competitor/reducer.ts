// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { CompetitorPageTypes } from './actions';
import { CompetitorPageInterface } from './types';
import { ContestTypes } from '@actions';

/* ------------- Initial State ------------- */
const INITIAL_STATE: CompetitorPageInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    title: CONSTANTS.PAGES.COMPETITOR.TITLE,
    description: CONSTANTS.PAGES.COMPETITOR.DESCRIPTION,
    account: undefined,
    contestsList: {
        data: undefined,
        metadata: undefined,
        isFetching: false,
        isInitialized: false,
        append: false,
    },
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

function fetchContestsMaterialized(state: any, { append = false }: any) {
    return Immutable.merge(state, {
        contestsList: {
            ...state.contestsList,
            isFetching: true,
            append,
        },
    });
}

function fetchContestsMaterializedSuccess(
    state: any,
    { data, metadata, isFetching = false, isInitialized = true }: any
) {
    return Immutable.merge(state, {
        contestsList: {
            isFetching,
            isInitialized,
            data: state.contestsList.append
                ? [...state.contestsList.data, ...data]
                : data,
            metadata,
        },
    });
}

function fetchContestsMaterializedFailure(state: any) {
    return Immutable.merge(state, {
        contestsList: {
            ...state.contestsList,
            isFetching: false,
            isInitialized: true,
        },
    });
}

const HANDLERS = {
    [CompetitorPageTypes.INIT]: init,
    [CompetitorPageTypes.INIT_SUCCESS]: initSuccess,
    [CompetitorPageTypes.INIT_FAILURE]: initFailure,
    [CompetitorPageTypes.TERMINATE]: terminate,
    [CompetitorPageTypes.SET]: set,
    [ContestTypes.FETCH_CONTESTS_MATERIALIZED]: fetchContestsMaterialized,
    [ContestTypes.FETCH_CONTESTS_MATERIALIZED_SUCCESS]: fetchContestsMaterializedSuccess,
    [ContestTypes.FETCH_CONTESTS_MATERIALIZED_FAILURE]: fetchContestsMaterializedFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
