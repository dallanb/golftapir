// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';
import { ContestTypes } from '@reducers/ContestReducer';
import { normalizeContestParticipants } from '@pages/Contest/utils';
import { AccountTypes } from '@reducers/AccountReducer';

const { Types, Creators } = createActions(
    {
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
    },
    {
        prefix: 'CONTEST_PAGE_',
    }
);
export const ContestPageTypes = Types;
export default Creators;

/* ------------- Interface ------------- */
export interface ContestPageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly contestParticipants: any[];
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestPageInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    contestParticipants: [],
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
        isInitialized: false,
        err,
    });
}

function fetchContestSuccess(state: any, { data }: any) {
    const { participants: contestParticipants = [] } = data;
    return Immutable.merge(state, {
        contestParticipants,
    });
}

function bulkFetchAccountsSuccess(state: ContestPageInterface, { data }: any) {
    const contestParticipants = normalizeContestParticipants(
        state.contestParticipants,
        data
    );
    return Immutable.merge(state, {
        contestParticipants,
    });
}

const HANDLERS = {
    [Types.INIT]: init,
    [Types.INIT_SUCCESS]: initSuccess,
    [Types.INIT_FAILURE]: initFailure,
    [ContestTypes.FETCH_CONTEST_SUCCESS]: fetchContestSuccess,
    [AccountTypes.BULK_FETCH_ACCOUNTS_SUCCESS]: bulkFetchAccountsSuccess,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
