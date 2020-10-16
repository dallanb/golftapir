// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { ContestPageTypes } from './actions';
import { ContestPageInterface } from './types';
import { ContestTypes, NotificationTypes } from '@actions';
import { mergeContestParticipant } from '@pages/Contest/utils';
import constants from '@constants';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestPageInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    title: '',
    description: CONSTANTS.PAGES.CONTEST.DESCRIPTION,
    subscribed: false,
    contestParticipants: [],
    contestWagers: [],
    contest: undefined,
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
    const contestParticipants = mergeContestParticipant(
        state.contestParticipants,
        { uuid, status }
    );
    return Immutable.merge(state, {
        contestParticipants,
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
    [NotificationTypes.SUBSCRIBE_SUCCESS]: subscribeSuccess,
    [NotificationTypes.UNSUBSCRIBE_SUCCESS]: unsubscribeSuccess,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
