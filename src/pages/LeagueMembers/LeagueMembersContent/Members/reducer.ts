// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { LeagueMembersPageContentMembersTypes } from './actions';
import { LeagueMembersPageContentMembersInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: LeagueMembersPageContentMembersInterface = {
    isFetching: false,
    isRefreshing: false,
    isInitialized: false,
    err: undefined,
    data: undefined,
    metadata: undefined,
    append: false,
};

/* ------------- Reducers ------------- */
function init(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        ...INITIAL_STATE,
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

function fetchData(state: any, { append = false }: any) {
    return Immutable.merge(state, {
        isFetching: true,
        append,
    });
}

function fetchDataSuccess(
    state: any,
    { data, metadata, isFetching = false }: any
) {
    return Immutable.merge(state, {
        isFetching,
        data: state.append ? [...state.data, ...data] : data,
        metadata,
    });
}

function fetchDataFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isFetching: false,
        err,
    });
}

function refresh(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isRefreshing: true,
        err: null,
    });
}

function refreshSuccess(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isRefreshing: false,
    });
}

function refreshFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isRefreshing: false,
        err,
    });
}

const HANDLERS = {
    [LeagueMembersPageContentMembersTypes.INIT]: init,
    [LeagueMembersPageContentMembersTypes.INIT_SUCCESS]: initSuccess,
    [LeagueMembersPageContentMembersTypes.INIT_FAILURE]: initFailure,
    [LeagueMembersPageContentMembersTypes.TERMINATE]: terminate,
    [LeagueMembersPageContentMembersTypes.SET]: set,
    [LeagueMembersPageContentMembersTypes.FETCH_DATA]: fetchData,
    [LeagueMembersPageContentMembersTypes.FETCH_DATA_SUCCESS]: fetchDataSuccess,
    [LeagueMembersPageContentMembersTypes.FETCH_DATA_FAILURE]: fetchDataFailure,
    [LeagueMembersPageContentMembersTypes.REFRESH]: refresh,
    [LeagueMembersPageContentMembersTypes.REFRESH_SUCCESS]: refreshSuccess,
    [LeagueMembersPageContentMembersTypes.REFRESH_FAILURE]: refreshFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
