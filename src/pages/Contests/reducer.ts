// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { filterActions } from 'redux-ignore';
import CONSTANTS from '@locale/en-CA';
import { ContestTypes } from '@actions';
import { ContestsPageTypes } from './actions';
import { ContestsPageInterface } from './types';
import constants from '@constants';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestsPageInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    title: CONSTANTS.PAGES.CONTESTS.TITLE,
    description: CONSTANTS.PAGES.CONTESTS.DESCRIPTION,
    contestsList: {
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

function fetchContests(state: any, { append = false }: any) {
    return Immutable.merge(state, {
        contestsList: {
            ...state.contestsList,
            isFetching: true,
            append,
        },
    });
}

function fetchContestsSuccess(
    state: any,
    { data, metadata, isFetching = false }: any
) {
    return Immutable.merge(state, {
        contestsList: {
            isFetching,
            data: state.contestsList.append
                ? [...state.contestsList.data, ...data]
                : data,
            metadata,
        },
    });
}

function fetchContestsFailure(state: any) {
    return Immutable.merge(state, {
        contestsList: {
            ...state.contestsList,
            isFetching: false,
        },
    });
}

const HANDLERS = {
    [ContestsPageTypes.INIT]: init,
    [ContestsPageTypes.INIT_SUCCESS]: initSuccess,
    [ContestsPageTypes.INIT_FAILURE]: initFailure,
    [ContestsPageTypes.TERMINATE]: terminate,
    [ContestsPageTypes.SET]: set,
    [ContestTypes.FETCH_CONTESTS]: fetchContests,
    [ContestTypes.FETCH_CONTESTS_SUCCESS]: fetchContestsSuccess,
    [ContestTypes.FETCH_CONTESTS_FAILURE]: fetchContestsFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
