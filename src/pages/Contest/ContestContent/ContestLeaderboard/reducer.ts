// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ContestPageContentContestLeaderboardTypes } from './actions';
import { ContestPageContentContestLeaderboardInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestPageContentContestLeaderboardInterface = {
    isInitialized: false,
    err: undefined,
    sheets: undefined,
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

function set(state: any, { data }: any) {
    return Immutable.merge(state, {
        ...data,
    });
}

function setSheet(state = INITIAL_STATE, { sheet }: any) {
    return Immutable.merge(state, {
        sheets: { ...state.sheets, ...sheet },
    });
}

function setRankingLookup(state = INITIAL_STATE, { rankingLookup }: any) {
    return Immutable.merge(state, {
        rankingLookup,
    });
}

const HANDLERS = {
    [ContestPageContentContestLeaderboardTypes.INIT]: init,
    [ContestPageContentContestLeaderboardTypes.INIT_SUCCESS]: initSuccess,
    [ContestPageContentContestLeaderboardTypes.INIT_FAILURE]: initFailure,
    [ContestPageContentContestLeaderboardTypes.TERMINATE]: terminate,
    [ContestPageContentContestLeaderboardTypes.SET]: set,
    [ContestPageContentContestLeaderboardTypes.SET_SHEET]: setSheet,
    [ContestPageContentContestLeaderboardTypes.SET_RANKING_LOOKUP]: setRankingLookup,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
