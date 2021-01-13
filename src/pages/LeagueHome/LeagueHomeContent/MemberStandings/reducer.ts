// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { LeagueHomePageContentMemberStandingsTypes } from './actions';
import { LeagueHomePageContentMemberStandingsInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: LeagueHomePageContentMemberStandingsInterface = {
    isInitialized: false,
    isRefreshing: false,
    err: undefined,
    members: undefined,
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

function refresh(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isRefreshing: true,
        err: null,
    });
}

function refreshSuccess(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isRefreshing: false,
    });
}

function refreshFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isRefreshing: false,
        err,
    });
}

function set(state: any, { data }: any) {
    return Immutable.merge(state, {
        ...data,
    });
}

function setMembers(state: any, { members }: any) {
    return Immutable.merge(state, {
        members,
    });
}

const HANDLERS = {
    [LeagueHomePageContentMemberStandingsTypes.INIT]: init,
    [LeagueHomePageContentMemberStandingsTypes.INIT_SUCCESS]: initSuccess,
    [LeagueHomePageContentMemberStandingsTypes.INIT_FAILURE]: initFailure,
    [LeagueHomePageContentMemberStandingsTypes.TERMINATE]: terminate,
    [LeagueHomePageContentMemberStandingsTypes.REFRESH]: refresh,
    [LeagueHomePageContentMemberStandingsTypes.REFRESH_SUCCESS]: refreshSuccess,
    [LeagueHomePageContentMemberStandingsTypes.REFRESH_FAILURE]: refreshFailure,
    [LeagueHomePageContentMemberStandingsTypes.SET]: set,
    [LeagueHomePageContentMemberStandingsTypes.SET_MEMBERS]: setMembers,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
