// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ContestPageSiderContentParticipantCompletedContestCompletedTypes } from './actions';
import { ContestPageSiderContentParticipantCompletedContestCompletedInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestPageSiderContentParticipantCompletedContestCompletedInterface = {
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
    [ContestPageSiderContentParticipantCompletedContestCompletedTypes.INIT]: init,
    [ContestPageSiderContentParticipantCompletedContestCompletedTypes.INIT_SUCCESS]: initSuccess,
    [ContestPageSiderContentParticipantCompletedContestCompletedTypes.INIT_FAILURE]: initFailure,
    [ContestPageSiderContentParticipantCompletedContestCompletedTypes.TERMINATE]: terminate,
    [ContestPageSiderContentParticipantCompletedContestCompletedTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
