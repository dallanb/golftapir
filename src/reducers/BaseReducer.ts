// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { AccountTypes, AuthTypes } from '@actions';
import { localStorageSave } from '@utils';

/* ------------- Interface ------------- */
export interface BaseInterface {
    readonly me: any;
    readonly isLoggedIn: boolean;
    readonly forceLogout: boolean;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: BaseInterface = {
    me: undefined,
    isLoggedIn: false,
    forceLogout: false,
};

/* ------------- Reducers ------------- */
const loginSuccess = localStorageSave((state: any) =>
    Immutable.merge(state, {
        isLoggedIn: true,
        forceLogout: false,
    })
);

const refreshSuccess = localStorageSave((state: any) =>
    Immutable.merge(state, {
        isLoggedIn: true,
        forceLogout: false,
    })
);

const refreshFailure = localStorageSave((state: any, { err }: any) =>
    Immutable.merge(state, {
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

const fetchMyAccountSuccess = localStorageSave((state: any, { data }: any) =>
    Immutable.merge(state, {
        me: data,
    })
);

const HANDLERS = {
    [AuthTypes.LOGIN_SUCCESS]: loginSuccess,
    [AuthTypes.REFRESH_SUCCESS]: refreshSuccess,
    [AuthTypes.REFRESH_FAILURE]: refreshFailure,
    [AuthTypes.LOGOUT_SUCCESS]: logoutSuccess,
    [AccountTypes.FETCH_MY_ACCOUNT_SUCCESS]: fetchMyAccountSuccess,
};

export default createReducer(INITIAL_STATE, HANDLERS);
