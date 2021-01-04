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
    membersHash: undefined,
    rankingLookup: undefined,
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

function updateContestParticipantScore(
    state = INITIAL_STATE,
    { participant, strokes, score }: any
) {
    const participants = Object.assign({}, state.contest.participants, {
        [participant]: {
            ...state.contest.participants[participant],
            score,
            strokes,
        },
    });
    return Immutable.merge(state, {
        contest: { ...state.contest, participants },
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
    [ContestPageTypes.UPDATE_CONTEST_PARTICIPANT_SCORE]: updateContestParticipantScore,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
