// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        fetchAccount: ['uuid'],
        fetchAccountSuccess: ['data'],
        fetchAccountFailure: ['err'],
        fetchAccounts: null,
        fetchAccountsSuccess: ['data'],
        fetchAccountsFailure: ['err'],
        updateAccount: ['uuid', 'values'],
        updateAccountSuccess: ['data'],
        updateAccountFailure: ['err'],
        updateAvatar: ['uuid', 'avatar'],
        updateAvatarSuccess: ['data'],
        updateAvatarFailure: ['err'],
        searchAccounts: ['key'],
        searchAccountsSuccess: ['data'],
        searchAccountsFailure: ['err'],
    },
    {
        prefix: 'ACCOUNT_',
    }
);
export const AccountTypes = Types;
export default Creators;

/* ------------- Interface ------------- */
export interface AccountInterface {
    readonly data: any;
    readonly isFetching: boolean;
    readonly isSubmitting: boolean;
    readonly err?: Error;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: AccountInterface = {
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

function fetchAccounts(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isSubmitting: true,
        err: null,
    });
}

function fetchAccountsSuccess(state: any, { data }: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err: null,
        data,
    });
}

function fetchAccountsFailure(state: any, { err }: any) {
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
function searchAccounts(state: any) {
    return Immutable.merge(state, {
        isFetching: true,
    });
}
function searchAccountsSuccess(state: any, { data }: any) {
    return Immutable.merge(state, {
        isFetching: false,
        data,
    });
}
function searchAccountsFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isFetching: false,
        err,
    });
}

const HANDLERS = {
    [Types.FETCH_ACCOUNT]: fetchAccount,
    [Types.FETCH_ACCOUNT_SUCCESS]: fetchAccountSuccess,
    [Types.FETCH_ACCOUNT_FAILURE]: fetchAccountFailure,
    [Types.FETCH_ACCOUNTS]: fetchAccounts,
    [Types.FETCH_ACCOUNTS_SUCCESS]: fetchAccountsSuccess,
    [Types.FETCH_ACCOUNTS_FAILURE]: fetchAccountsFailure,
    [Types.UPDATE_ACCOUNT]: updateAccount,
    [Types.UPDATE_ACCOUNT_SUCCESS]: updateAccountSuccess,
    [Types.UPDATE_ACCOUNT_FAILURE]: updateAccountFailure,
    [Types.UPDATE_AVATAR]: updateAvatar,
    [Types.UPDATE_AVATAR_SUCCESS]: updateAvatarSuccess,
    [Types.UPDATE_AVATAR_FAILURE]: updateAvatarFailure,
    [Types.SEARCH_ACCOUNTS]: searchAccounts,
    [Types.SEARCH_ACCOUNTS_SUCCESS]: searchAccountsSuccess,
    [Types.SEARCH_ACCOUNTS_FAILURE]: searchAccountsFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
