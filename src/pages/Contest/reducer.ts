// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { ContestPageTypes } from './actions';
import { ContestPageInterface } from './types';
import { ContestTypes, NotificationTypes } from '@actions';
import { mergeContestParticipant } from '@pages/Contest/utils';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestPageInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    title: '',
    description: CONSTANTS.PAGES.CONTEST.DESCRIPTION,
    status: '',
    owner_uuid: '',
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

function updateContestSuccess(state = INITIAL_STATE, { data }: any) {
    const { name: title, status } = data;
    return Immutable.merge(state, {
        title,
        status,
    });
}

function updateContestParticipantSuccess(state = INITIAL_STATE, { data }: any) {
    const contestParticipants = mergeContestParticipant(
        state.contestParticipants,
        data
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
    [ContestTypes.UPDATE_CONTEST_SUCCESS]: updateContestSuccess,
    [ContestTypes.UPDATE_CONTEST_PARTICIPANT_SUCCESS]: updateContestParticipantSuccess,
    [NotificationTypes.SUBSCRIBE_SUCCESS]: subscribeSuccess,
    [NotificationTypes.UNSUBSCRIBE_SUCCESS]: unsubscribeSuccess,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
