// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ContestPageSiderContentParticipantActiveContestPendingTypes } from './actions';
import { ContestPageSiderContentParticipantActiveContestPendingInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestPageSiderContentParticipantActiveContestPendingInterface = {
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
    [ContestPageSiderContentParticipantActiveContestPendingTypes.INIT]: init,
    [ContestPageSiderContentParticipantActiveContestPendingTypes.INIT_SUCCESS]: initSuccess,
    [ContestPageSiderContentParticipantActiveContestPendingTypes.INIT_FAILURE]: initFailure,
    [ContestPageSiderContentParticipantActiveContestPendingTypes.TERMINATE]: terminate,
    [ContestPageSiderContentParticipantActiveContestPendingTypes.REFRESH]: refresh,
    [ContestPageSiderContentParticipantActiveContestPendingTypes.REFRESH_SUCCESS]: refreshSuccess,
    [ContestPageSiderContentParticipantActiveContestPendingTypes.REFRESH_FAILURE]: refreshFailure,
    [ContestPageSiderContentParticipantActiveContestPendingTypes.SET]: set,
    [ContestPageSiderContentParticipantActiveContestPendingTypes.FETCH_DATA]: fetchData,
    [ContestPageSiderContentParticipantActiveContestPendingTypes.FETCH_DATA_SUCCESS]: fetchDataSuccess,
    [ContestPageSiderContentParticipantActiveContestPendingTypes.FETCH_DATA_FAILURE]: fetchDataFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
