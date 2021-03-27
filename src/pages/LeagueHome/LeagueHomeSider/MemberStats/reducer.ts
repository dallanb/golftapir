// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { LeagueHomePageSiderMemberStatsTypes } from './actions';
import { LeagueHomePageSiderMemberStatsInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: LeagueHomePageSiderMemberStatsInterface = {
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
    [LeagueHomePageSiderMemberStatsTypes.INIT]: init,
    [LeagueHomePageSiderMemberStatsTypes.INIT_SUCCESS]: initSuccess,
    [LeagueHomePageSiderMemberStatsTypes.INIT_FAILURE]: initFailure,
    [LeagueHomePageSiderMemberStatsTypes.TERMINATE]: terminate,
    [LeagueHomePageSiderMemberStatsTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
