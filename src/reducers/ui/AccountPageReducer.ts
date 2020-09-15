// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { AccountTypes } from '@reducers/data/AccountReducer';

/* ------------- Interface ------------- */
export interface AccountPageInterface {
    readonly data: any;
    readonly isFetching: boolean;
    readonly isSubmitting: boolean;
    readonly err?: Error;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: AccountPageInterface = {
    data: undefined,
    isFetching: false,
    isSubmitting: false,
    err: undefined,
};

/* ------------- Reducers ------------- */
function fetchAccount(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isSubmitting: true,
        err: null,
    });
}

function fetchAccountSuccess(state: any, { data }: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err: null,
        data,
    });
}

function fetchAccountFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err,
    });
}

function updateAccount(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isSubmitting: true,
        err: null,
    });
}

function updateAccountSuccess(state: any, { data }: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err: null,
        data,
    });
}

function updateAccountFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err,
    });
}

function updateAvatar(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isSubmitting: true,
        err: null,
    });
}

function updateAvatarSuccess(state: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err: null,
    });
}

function updateAvatarFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err,
    });
}

const HANDLERS = {
    [AccountTypes.FETCH_ACCOUNT]: fetchAccount,
    [AccountTypes.FETCH_ACCOUNT_SUCCESS]: fetchAccountSuccess,
    [AccountTypes.FETCH_ACCOUNT_FAILURE]: fetchAccountFailure,
    [AccountTypes.UPDATE_ACCOUNT]: updateAccount,
    [AccountTypes.UPDATE_ACCOUNT_SUCCESS]: updateAccountSuccess,
    [AccountTypes.UPDATE_ACCOUNT_FAILURE]: updateAccountFailure,
    [AccountTypes.UPDATE_AVATAR]: updateAvatar,
    [AccountTypes.UPDATE_AVATAR_SUCCESS]: updateAvatarSuccess,
    [AccountTypes.UPDATE_AVATAR_FAILURE]: updateAvatarFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
