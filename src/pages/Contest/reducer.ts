// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ContestPageTypes } from './actions';
import { ContestPageInterface } from './types';
import { mergeContestParticipant } from '@pages/Contest/utils';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestPageInterface = {
    isInitialized: false,
    isRefreshing: false,
    err: undefined,
    subscribed: false,
    contest: undefined,
    participant: undefined,
    rankingLookup: undefined,
    payout: {
        isFetching: false,
        data: undefined,
        err: undefined,
    },
};

/* ------------- Reducers ------------- */
function init(state = INITIAL_STATE) {
    return Immutable.merge(state, {
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

function subscribeSuccess(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        subscribed: true,
    });
}

function unsubscribeSuccess(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        subscribed: false,
    });
}

function fetchPayout(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        payout: {
            ...state.payout,
            isFetching: true,
            err: undefined,
        },
    });
}

function fetchPayoutSuccess(state = INITIAL_STATE, { payout: data }: any) {
    return Immutable.merge(state, {
        payout: {
            ...state.payout,
            isFetching: false,
            data,
        },
    });
}

function fetchPayoutFailure(state = INITIAL_STATE, { err }: any) {
    return Immutable.merge(state, {
        payout: {
            ...state.payout,
            isFetching: false,
            err,
        },
    });
}

const HANDLERS = {
    [ContestPageTypes.INIT]: init,
    [ContestPageTypes.INIT_SUCCESS]: initSuccess,
    [ContestPageTypes.INIT_FAILURE]: initFailure,
    [ContestPageTypes.TERMINATE]: terminate,
    [ContestPageTypes.REFRESH]: refresh,
    [ContestPageTypes.REFRESH_SUCCESS]: refreshSuccess,
    [ContestPageTypes.REFRESH_FAILURE]: refreshFailure,
    [ContestPageTypes.SET]: set,
    [ContestPageTypes.SUBSCRIBE_SUCCESS]: subscribeSuccess,
    [ContestPageTypes.UNSUBSCRIBE_SUCCESS]: unsubscribeSuccess,
    [ContestPageTypes.FETCH_PAYOUT]: fetchPayout,
    [ContestPageTypes.FETCH_PAYOUT_SUCCESS]: fetchPayoutSuccess,
    [ContestPageTypes.FETCH_PAYOUT_FAILURE]: fetchPayoutFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
