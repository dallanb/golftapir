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
    league: {
        isFetching: false,
        data: undefined,
        err: undefined,
    },
    leagueMember: {
        isFetching: false,
        data: undefined,
        err: undefined,
    },
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

function fetchLeague(state: any) {
    return Immutable.merge(state, {
        league: {
            isFetching: true,
            data: undefined,
            err: undefined,
        },
    });
}

function fetchLeagueSuccess(state: any, { league: data }: any) {
    return Immutable.merge(state, {
        league: { ...state.league, isFetching: false, data },
    });
}

function fetchLeagueFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        league: {
            isFetching: false,
            data: undefined,
            err,
        },
    });
}

function fetchLeagueMember(state: any) {
    return Immutable.merge(state, {
        leagueMember: {
            isFetching: true,
            data: undefined,
            err: undefined,
        },
    });
}

function fetchLeagueMemberSuccess(state: any, { leagueMember: data }: any) {
    return Immutable.merge(state, {
        leagueMember: {
            ...state.leagueMember,
            isFetching: false,
            data,
        },
    });
}

function fetchLeagueMemberFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        league: {
            isFetching: false,
            data: undefined,
            err,
        },
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
    [LeagueAppTypes.FETCH_LEAGUE]: fetchLeague,
    [LeagueAppTypes.FETCH_LEAGUE_SUCCESS]: fetchLeagueSuccess,
    [LeagueAppTypes.FETCH_LEAGUE_FAILURE]: fetchLeagueFailure,
    [LeagueAppTypes.FETCH_LEAGUE_MEMBER]: fetchLeagueMember,
    [LeagueAppTypes.FETCH_LEAGUE_MEMBER_SUCCESS]: fetchLeagueMemberSuccess,
    [LeagueAppTypes.FETCH_LEAGUE_MEMBER_FAILURE]: fetchLeagueMemberFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
