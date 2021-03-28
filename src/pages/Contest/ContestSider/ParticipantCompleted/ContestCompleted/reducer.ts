// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ContestPageSiderParticipantCompletedContestCompletedTypes } from './actions';
import { ContestPageSiderParticipantCompletedContestCompletedInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestPageSiderParticipantCompletedContestCompletedInterface = {
    isInitialized: false,
    err: undefined,
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

const HANDLERS = {
    [ContestPageSiderParticipantCompletedContestCompletedTypes.INIT]: init,
    [ContestPageSiderParticipantCompletedContestCompletedTypes.INIT_SUCCESS]: initSuccess,
    [ContestPageSiderParticipantCompletedContestCompletedTypes.INIT_FAILURE]: initFailure,
    [ContestPageSiderParticipantCompletedContestCompletedTypes.TERMINATE]: terminate,
    [ContestPageSiderParticipantCompletedContestCompletedTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
