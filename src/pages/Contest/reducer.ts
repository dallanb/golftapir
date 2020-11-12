// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ContestPageTypes } from './actions';
import { ContestPageInterface } from './types';
import { mergeContestParticipant } from '@pages/Contest/utils';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestPageInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    subscribed: false,
    contestWagers: [],
    contest: undefined,
    participant: undefined,
    score: undefined,
    accountsHash: undefined,
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

function updateContestStatusSuccess(state = INITIAL_STATE, { status }: any) {
    return Immutable.merge(state, {
        contest: {
            ...state.contest,
            status,
        },
    });
}

function updateContestParticipantStatusSuccess(
    state = INITIAL_STATE,
    { uuid, status }: any
) {
    const participants = mergeContestParticipant(state.contest.participants, {
        uuid,
        status,
    });
    return Immutable.merge(state, {
        contest: {
            ...state.contest,
            participants,
        },
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

const HANDLERS = {
    [ContestPageTypes.INIT]: init,
    [ContestPageTypes.INIT_SUCCESS]: initSuccess,
    [ContestPageTypes.INIT_FAILURE]: initFailure,
    [ContestPageTypes.TERMINATE]: terminate,
    [ContestPageTypes.SET]: set,
    [ContestPageTypes.UPDATE_CONTEST_STATUS_SUCCESS]: updateContestStatusSuccess,
    [ContestPageTypes.UPDATE_CONTEST_PARTICIPANT_STATUS_SUCCESS]: updateContestParticipantStatusSuccess,
    [ContestPageTypes.SUBSCRIBE_SUCCESS]: subscribeSuccess,
    [ContestPageTypes.UNSUBSCRIBE_SUCCESS]: unsubscribeSuccess,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
