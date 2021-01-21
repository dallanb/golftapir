// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import {
    AuthTypes,
    LeagueTypes,
    MemberTypes,
    NotificationTypes,
} from '@actions';
import { localStorageSave } from '@utils';
import { NotificationInterface } from '@reducers/NotificationReducer';

/* ------------- Interface ------------- */
export interface BaseInterface {
    readonly me: any;
    readonly leagues: any;
    readonly isLoggedIn: boolean;
    readonly forceLogout: boolean;
    readonly expiry: number;
    readonly pending: number;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: BaseInterface = {
    me: undefined,
    leagues: undefined,
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

const fetchMyMemberUserSuccess = localStorageSave((state: any, { data }: any) =>
    Immutable.merge(state, {
        me: data,
    })
);

const refreshMyMemberStatsSuccess = localStorageSave(
    (state: any, { stats: stat }: any) => {
        const me = Object.assign({}, state.me, { stat });
        return Immutable.merge(state, {
            me,
        });
    }
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

const fetchMyLeaguesSuccess = localStorageSave((state: any, { data }: any) =>
    Immutable.merge(state, {
        leagues: data,
    })
);

const HANDLERS = {
    [AuthTypes.LOGIN_SUCCESS]: loginSuccess,
    [AuthTypes.REFRESH_SUCCESS]: refreshSuccess,
    [AuthTypes.REFRESH_FAILURE]: refreshFailure,
    [AuthTypes.LOGOUT_SUCCESS]: logoutSuccess,
    [MemberTypes.FETCH_MY_MEMBER_USER_SUCCESS]: fetchMyMemberUserSuccess,
    [MemberTypes.REFRESH_MY_MEMBER_STATS_SUCCESS]: refreshMyMemberStatsSuccess,
    [NotificationTypes.FETCH_PENDING_SUCCESS]: fetchNotificationPendingSuccess,
    [NotificationTypes.FETCH_PENDING_FAILURE]: fetchNotificationPendingFailure,
    [LeagueTypes.FETCH_MY_LEAGUES_SUCCESS]: fetchMyLeaguesSuccess,
};

export default createReducer(INITIAL_STATE, HANDLERS);
