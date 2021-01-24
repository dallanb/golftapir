// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { LeagueAppTypes } from './actions';
import { AccountTypes, LeagueTypes } from '@actions';

/* ------------- Interface ------------- */
export interface LeagueAppInterface {
    readonly isFetching: boolean;
    readonly isRefreshing: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly league: any;
    readonly leagueMember: any;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: LeagueAppInterface = {
    isFetching: false,
    isRefreshing: false,
    isInitialized: false,
    err: undefined,
    league: undefined,
    leagueMember: undefined,
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
        isInitialized: true,
        err,
    });
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

function terminate() {
    return INITIAL_STATE;
}

function set(state: any, { data }: any) {
    return Immutable.merge(state, {
        ...data,
    });
}

function fetchLeagueSuccess(state: any, { data: league }: any) {
    return Immutable.merge(state, {
        league,
    });
}

function fetchMyMembersMaterializedUserSuccess(
    state: any,
    { data: leagueMember }: any
) {
    return Immutable.merge(state, {
        leagueMember,
    });
}

const HANDLERS = {
    [LeagueAppTypes.INIT]: init,
    [LeagueAppTypes.INIT_SUCCESS]: initSuccess,
    [LeagueAppTypes.INIT_FAILURE]: initFailure,
    [LeagueAppTypes.REFRESH]: refresh,
    [LeagueAppTypes.REFRESH_SUCCESS]: refreshSuccess,
    [LeagueAppTypes.REFRESH_FAILURE]: refreshFailure,
    [LeagueAppTypes.TERMINATE]: terminate,
    [LeagueAppTypes.SET]: set,
    [LeagueTypes.FETCH_LEAGUE_SUCCESS]: fetchLeagueSuccess,
    [LeagueTypes.FETCH_MY_MEMBERS_MATERIALIZED_USER_SUCCESS]: fetchMyMembersMaterializedUserSuccess, //TODO: SHOULD THIS BE HERE
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
