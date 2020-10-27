// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { ContestMatchupPageTypes } from './actions';
import { ContestMatchupPageInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestMatchupPageInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    title: CONSTANTS.PAGES.CONTEST_MATCHUP.TITLE,
    description: CONSTANTS.PAGES.CONTEST_MATCHUP.DESCRIPTION,
    score: undefined,
    contest: undefined,
    participants: undefined,
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

function updateScoreStatusSuccess(state: any, { status }: any) {
    return Immutable.merge(state, {
        score: {
            ...state.score,
            status,
        },
    });
}

const HANDLERS = {
    [ContestMatchupPageTypes.INIT]: init,
    [ContestMatchupPageTypes.INIT_SUCCESS]: initSuccess,
    [ContestMatchupPageTypes.INIT_FAILURE]: initFailure,
    [ContestMatchupPageTypes.TERMINATE]: terminate,
    [ContestMatchupPageTypes.SET]: set,
    [ContestMatchupPageTypes.UPDATE_SCORE_STATUS_SUCCESS]: updateScoreStatusSuccess,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
