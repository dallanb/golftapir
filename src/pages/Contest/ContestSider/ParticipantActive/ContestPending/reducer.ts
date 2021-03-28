// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ContestPageSiderParticipantActiveContestPendingTypes } from './actions';
import { ContestPageSiderParticipantActiveContestPendingInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestPageSiderParticipantActiveContestPendingInterface = {
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

const HANDLERS = {
    [ContestPageSiderParticipantActiveContestPendingTypes.INIT]: init,
    [ContestPageSiderParticipantActiveContestPendingTypes.INIT_SUCCESS]: initSuccess,
    [ContestPageSiderParticipantActiveContestPendingTypes.INIT_FAILURE]: initFailure,
    [ContestPageSiderParticipantActiveContestPendingTypes.TERMINATE]: terminate,
    [ContestPageSiderParticipantActiveContestPendingTypes.REFRESH]: refresh,
    [ContestPageSiderParticipantActiveContestPendingTypes.REFRESH_SUCCESS]: refreshSuccess,
    [ContestPageSiderParticipantActiveContestPendingTypes.REFRESH_FAILURE]: refreshFailure,
    [ContestPageSiderParticipantActiveContestPendingTypes.SET]: set,
    [ContestPageSiderParticipantActiveContestPendingTypes.FETCH_DATA]: fetchData,
    [ContestPageSiderParticipantActiveContestPendingTypes.FETCH_DATA_SUCCESS]: fetchDataSuccess,
    [ContestPageSiderParticipantActiveContestPendingTypes.FETCH_DATA_FAILURE]: fetchDataFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
