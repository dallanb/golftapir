// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { LeagueHomePageSiderContentMemberStatsTypes } from './actions';
import { LeagueHomePageSiderContentMemberStatsInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: LeagueHomePageSiderContentMemberStatsInterface = {
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
    [LeagueHomePageSiderContentMemberStatsTypes.INIT]: init,
    [LeagueHomePageSiderContentMemberStatsTypes.INIT_SUCCESS]: initSuccess,
    [LeagueHomePageSiderContentMemberStatsTypes.INIT_FAILURE]: initFailure,
    [LeagueHomePageSiderContentMemberStatsTypes.TERMINATE]: terminate,
    [LeagueHomePageSiderContentMemberStatsTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
