// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ContestPageContentContestLeaderboardScorecardTypes } from './actions';
import { ContestPageContentContestLeaderboardScorecardInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestPageContentContestLeaderboardScorecardInterface = {
    isInitialized: false,
    err: undefined,
    data: undefined,
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

function set(state: any, { data }: any) {
    return Immutable.merge(state, {
        ...data,
    });
}
const HANDLERS = {
    [ContestPageContentContestLeaderboardScorecardTypes.INIT]: init,
    [ContestPageContentContestLeaderboardScorecardTypes.INIT_SUCCESS]: initSuccess,
    [ContestPageContentContestLeaderboardScorecardTypes.INIT_FAILURE]: initFailure,
    [ContestPageContentContestLeaderboardScorecardTypes.TERMINATE]: terminate,
    [ContestPageContentContestLeaderboardScorecardTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
