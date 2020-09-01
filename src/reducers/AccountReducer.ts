// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        fetchAccount: ['email', 'password'],
        fetchAccountSuccess: null,
        fetchAccountFailure: ['err'],
        fetchAccounts: ['email', 'username', 'password'],
        fetchAccountsSuccess: null,
        fetchAccountsFailure: ['err'],
    },
    {
        prefix: 'ACCOUNT_',
    }
);
export const AccountTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
const INITIAL_STATE = {
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

function fetchAccountSuccess(state: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err: null,
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

function fetchAccountsSuccess(state: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err: null,
    });
}

function fetchAccountsFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
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
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
