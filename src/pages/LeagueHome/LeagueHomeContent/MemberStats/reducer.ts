// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { LeagueHomePageContentMemberStatsTypes } from './actions';
import { LeagueHomePageContentMemberStatsInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: LeagueHomePageContentMemberStatsInterface = {
    isInitialized: false,
    err: undefined,
    stat: undefined,
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
    [LeagueHomePageContentMemberStatsTypes.INIT]: init,
    [LeagueHomePageContentMemberStatsTypes.INIT_SUCCESS]: initSuccess,
    [LeagueHomePageContentMemberStatsTypes.INIT_FAILURE]: initFailure,
    [LeagueHomePageContentMemberStatsTypes.TERMINATE]: terminate,
    [LeagueHomePageContentMemberStatsTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
