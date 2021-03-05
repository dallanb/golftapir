// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { LeagueAppTypes } from './actions';
import { AppTypes } from '@actions';

/* ------------- Interface ------------- */
export interface LeagueAppInterface {
    readonly isFetching: boolean;
    readonly isRefreshing: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly uuid?: string;
    readonly league: any;
    readonly leagueMember: any;
    readonly leagueMembers: any;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: LeagueAppInterface = {
    isFetching: false,
    isRefreshing: false,
    isInitialized: false,
    err: undefined,
    uuid: undefined,
    league: {
        isInitialized: false,
        isRefreshing: false,
        data: undefined,
        err: undefined,
    },
    leagueMember: {
        isInitialized: false,
        isRefreshing: false,
        data: undefined,
        err: undefined,
    },
    leagueMembers: {
        isInitialized: false,
        isRefreshing: false,
        data: undefined,
        metadata: undefined,
        err: undefined,
    },
};

/* ------------- Reducers ------------- */
function init(state = INITIAL_STATE, { uuid }: any) {
    return Immutable.merge(state, {
        isFetching: true,
        isInitialized: false,
        err: null,
        uuid,
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

function refresh(state = INITIAL_STATE, { uuid }: any) {
    return Immutable.merge(state, {
        isRefreshing: true,
        err: null,
        uuid,
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

function initLeague(state: any) {
    return Immutable.merge(state, {
        league: {
            ...state.league,
            isInitialized: false,
            data: undefined,
            err: undefined,
        },
    });
}

function initLeagueSuccess(state: any) {
    return Immutable.merge(state, {
        league: { ...state.league, isInitialized: true },
    });
}

function initLeagueFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        league: {
            ...state.league,
            isInitialized: true,
            err,
        },
    });
}

function refreshLeague(state: any) {
    return Immutable.merge(state, {
        league: {
            ...state.league,
            isRefreshing: true,
        },
    });
}

function refreshLeagueSuccess(state: any) {
    return Immutable.merge(state, {
        league: { ...state.league, isRefreshing: false },
    });
}

function refreshLeagueFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        league: {
            ...state.league,
            isRefreshing: false,
            err,
        },
    });
}

function setLeague(state: any, { data }: any) {
    return Immutable.merge(state, {
        league: {
            ...state.league,
            data,
        },
    });
}

function initLeagueMember(state: any) {
    return Immutable.merge(state, {
        leagueMember: {
            ...state.leagueMember,
            isInitialized: false,
            data: undefined,
            err: undefined,
        },
    });
}

function initLeagueMemberSuccess(state: any) {
    return Immutable.merge(state, {
        leagueMember: {
            ...state.leagueMember,
            isInitialized: true,
        },
    });
}

function initLeagueMemberFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        leagueMember: {
            ...state.leagueMember,
            isInitialized: true,
            err,
        },
    });
}

function refreshLeagueMember(state: any) {
    return Immutable.merge(state, {
        leagueMember: {
            ...state.leagueMember,
            isRefreshing: true,
        },
    });
}

function refreshLeagueMemberSuccess(state: any) {
    return Immutable.merge(state, {
        leagueMember: { ...state.leagueMember, isRefreshing: false },
    });
}

function refreshLeagueMemberFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        leagueMember: {
            ...state.leagueMember,
            isRefreshing: false,
            err,
        },
    });
}

function setLeagueMember(state: any, { data }: any) {
    return Immutable.merge(state, {
        leagueMember: {
            ...state.leagueMember,
            data,
        },
    });
}

function initLeagueMembers(state: any) {
    return Immutable.merge(state, {
        leagueMembers: {
            ...state.leagueMembers,
            isInitialized: false,
            data: undefined,
            metadata: undefined,
            err: undefined,
        },
    });
}

function initLeagueMembersSuccess(state: any) {
    return Immutable.merge(state, {
        leagueMembers: {
            ...state.leagueMembers,
            isInitialized: true,
        },
    });
}

function initLeagueMembersFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        leagueMembers: {
            ...state.leagueMembers,
            isInitialized: true,
            err,
        },
    });
}

function refreshLeagueMembers(state: any) {
    return Immutable.merge(state, {
        leagueMembers: {
            ...state.leagueMembers,
            isRefreshing: true,
        },
    });
}

function refreshLeagueMembersSuccess(state: any) {
    return Immutable.merge(state, {
        leagueMembers: { ...state.leagueMembers, isRefreshing: false },
    });
}

function refreshLeagueMembersFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        leagueMembers: {
            ...state.leagueMembers,
            isRefreshing: false,
            err,
        },
    });
}

function setLeagueMembers(state: any, { data, metadata }: any) {
    return Immutable.merge(state, {
        leagueMembers: {
            ...state.leagueMembers,
            data,
            metadata,
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
    // League
    [LeagueAppTypes.INIT_LEAGUE]: initLeague,
    [LeagueAppTypes.INIT_LEAGUE_SUCCESS]: initLeagueSuccess,
    [LeagueAppTypes.INIT_LEAGUE_FAILURE]: initLeagueFailure,
    [AppTypes.REFRESH_LEAGUE]: refreshLeague,
    [AppTypes.REFRESH_LEAGUE_SUCCESS]: refreshLeagueSuccess,
    [AppTypes.REFRESH_LEAGUE_FAILURE]: refreshLeagueFailure,
    [LeagueAppTypes.SET_LEAGUE]: setLeague,
    // League Member
    [LeagueAppTypes.INIT_LEAGUE_MEMBER]: initLeagueMember,
    [LeagueAppTypes.INIT_LEAGUE_MEMBER_SUCCESS]: initLeagueMemberSuccess,
    [LeagueAppTypes.INIT_LEAGUE_MEMBER_FAILURE]: initLeagueMemberFailure,
    [AppTypes.REFRESH_LEAGUE_MEMBER]: refreshLeagueMember,
    [AppTypes.REFRESH_LEAGUE_MEMBER_SUCCESS]: refreshLeagueMemberSuccess,
    [AppTypes.REFRESH_LEAGUE_MEMBER_FAILURE]: refreshLeagueMemberFailure,
    [LeagueAppTypes.SET_LEAGUE_MEMBER]: setLeagueMember,
    // League Members
    [LeagueAppTypes.INIT_LEAGUE_MEMBERS]: initLeagueMembers,
    [LeagueAppTypes.INIT_LEAGUE_MEMBERS_SUCCESS]: initLeagueMembersSuccess,
    [LeagueAppTypes.INIT_LEAGUE_MEMBERS_FAILURE]: initLeagueMembersFailure,
    [AppTypes.REFRESH_LEAGUE_MEMBERS]: refreshLeagueMembers,
    [AppTypes.REFRESH_LEAGUE_MEMBERS_SUCCESS]: refreshLeagueMembersSuccess,
    [AppTypes.REFRESH_LEAGUE_MEMBERS_FAILURE]: refreshLeagueMembersFailure,
    [LeagueAppTypes.SET_LEAGUE_MEMBERS]: setLeagueMembers,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
