// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import {
    AuthTypes,
    BaseTypes,
    LeagueTypes,
    MemberTypes,
    NotificationTypes,
} from '@actions';
import { localStorageSave } from '@utils';
import { NotificationInterface } from '@reducers/NotificationReducer';

/* ------------- Interface ------------- */
export interface BaseInterface {
    readonly me: {
        isInitialized: boolean;
        isRefreshing: boolean;
        data: any;
        err?: Error;
    };
    readonly leagues: {
        isInitialized: boolean;
        isRefreshing: boolean;
        data: any;
        metadata: any;
        err?: Error;
    };
    readonly isLoggedIn: boolean;
    readonly forceLogout: boolean;
    readonly expiry: number;
    readonly pending: number;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: BaseInterface = {
    me: {
        isInitialized: false,
        isRefreshing: false,
        data: undefined,
        err: undefined,
    },
    leagues: {
        isInitialized: false,
        isRefreshing: false,
        data: undefined,
        metadata: undefined,
        err: undefined,
    },
    isLoggedIn: false,
    forceLogout: false,
    expiry: 0,
    pending: 0,
};

/* ------------- Reducers ------------- */
const loginSuccess = localStorageSave((state: any, { expiry }: any) =>
    Immutable.merge(state, {
        isLoggedIn: true,
        forceLogout: false,
        expiry,
    })
);

const refreshSuccess = localStorageSave((state: any, { expiry }: any) =>
    Immutable.merge(state, {
        isLoggedIn: true,
        forceLogout: false,
        expiry,
    })
);

const refreshFailure = localStorageSave((state: any, { err }: any) =>
    Immutable.merge(state, {
        ...INITIAL_STATE,
        isLoggedIn: false,
        forceLogout: true,
    })
);

const logoutSuccess = localStorageSave((state: any) =>
    Immutable.merge(state, {
        ...INITIAL_STATE,
        isLoggedIn: false,
        forceLogout: true,
    })
);

const initMe = localStorageSave((state: any) =>
    Immutable.merge(state, {
        me: {
            ...state.me,
            isInitialized: false,
            err: undefined,
        },
    })
);

const initMeSuccess = localStorageSave((state: any, { data }: any) =>
    Immutable.merge(state, {
        me: {
            ...state.me,
            isInitialized: true,
            data,
        },
    })
);

const initMeFailure = localStorageSave((state: any, { err }: any) =>
    Immutable.merge(state, {
        me: {
            ...state.me,
            isInitialized: true,
            err,
        },
    })
);

const refreshMe = localStorageSave((state: any) =>
    Immutable.merge(state, {
        me: {
            ...state.me,
            isRefreshing: true,
            err: undefined,
        },
    })
);

const refreshMeSuccess = localStorageSave((state: any, { data }: any) =>
    Immutable.merge(state, {
        me: {
            ...state.me,
            isRefreshing: false,
            data,
        },
    })
);

const refreshMeFailure = localStorageSave((state: any, { err }: any) =>
    Immutable.merge(state, {
        me: {
            ...state.me,
            isRefreshing: true,
            err,
        },
    })
);

const initLeagues = localStorageSave((state: any) =>
    Immutable.merge(state, {
        me: {
            ...state.leagues,
            isInitialized: false,
            err: undefined,
        },
    })
);

const initLeaguesSuccess = localStorageSave((state: any, { data }: any) =>
    Immutable.merge(state, {
        me: {
            ...state.leagues,
            isInitialized: true,
            data,
        },
    })
);

const initLeaguesFailure = localStorageSave((state: any, { err }: any) =>
    Immutable.merge(state, {
        me: {
            ...state.leagues,
            isInitialized: true,
            err,
        },
    })
);

const refreshLeagues = localStorageSave((state: any) =>
    Immutable.merge(state, {
        me: {
            ...state.leagues,
            isRefreshing: true,
            err: undefined,
        },
    })
);

const refreshLeaguesSuccess = localStorageSave((state: any, { data }: any) =>
    Immutable.merge(state, {
        me: {
            ...state.leagues,
            isRefreshing: false,
            data,
        },
    })
);

const refreshLeaguesFailure = localStorageSave((state: any, { err }: any) =>
    Immutable.merge(state, {
        me: {
            ...state.leagues,
            isRefreshing: true,
            err,
        },
    })
);

const fetchNotificationPendingSuccess = localStorageSave(
    (state: any, { pending }: NotificationInterface) =>
        Immutable.merge(state, {
            pending,
        })
);

const fetchNotificationPendingFailure = localStorageSave((state: any) =>
    Immutable.merge(state, {
        pending: INITIAL_STATE.pending,
    })
);

const HANDLERS = {
    [AuthTypes.LOGIN_SUCCESS]: loginSuccess,
    [AuthTypes.REFRESH_SUCCESS]: refreshSuccess,
    [AuthTypes.REFRESH_FAILURE]: refreshFailure,
    [AuthTypes.LOGOUT_SUCCESS]: logoutSuccess,
    [BaseTypes.INIT_ME]: initMe,
    [BaseTypes.INIT_ME_SUCCESS]: initMeSuccess,
    [BaseTypes.INIT_ME_FAILURE]: initMeFailure,
    [BaseTypes.REFRESH_ME]: refreshMe,
    [BaseTypes.REFRESH_ME_SUCCESS]: refreshMeSuccess,
    [BaseTypes.REFRESH_ME_FAILURE]: refreshMeFailure,
    [BaseTypes.INIT_LEAGUES]: initLeagues,
    [BaseTypes.INIT_LEAGUES_SUCCESS]: initLeaguesSuccess,
    [BaseTypes.INIT_LEAGUES_FAILURE]: initLeaguesFailure,
    [BaseTypes.REFRESH_LEAGUES]: refreshLeagues,
    [BaseTypes.REFRESH_LEAGUES_SUCCESS]: refreshLeaguesSuccess,
    [BaseTypes.REFRESH_LEAGUES_FAILURE]: refreshLeaguesFailure,
    [NotificationTypes.FETCH_PENDING_SUCCESS]: fetchNotificationPendingSuccess,
    [NotificationTypes.FETCH_PENDING_FAILURE]: fetchNotificationPendingFailure,
};

export default createReducer(INITIAL_STATE, HANDLERS);
