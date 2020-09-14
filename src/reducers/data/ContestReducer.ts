// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        fetchContest: ['uuid', 'options'],
        fetchContestSuccess: ['data', 'metadata'],
        fetchContestFailure: ['err'],
        fetchContests: ['options', 'append'],
        fetchContestsSuccess: ['data', 'metadata'],
        fetchContestsFailure: ['err'],
        createContest: ['data'],
        createContestSuccess: null,
        createContestFailure: ['err'],
        fetchContestParticipants: ['uuid'],
        fetchContestParticipantsSuccess: ['data', 'metadata'],
        fetchContestParticipantsFailure: ['err'],
    },
    {
        prefix: 'CONTEST_',
    }
);

export const ContestTypes = Types;
export default Creators;

/* ------------- Interface ------------- */
export interface ContestInterface {
    readonly data: any;
    readonly metadata: any;
    readonly isFetching: boolean;
    readonly isSubmitting: boolean;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestInterface = {
    data: undefined,
    metadata: undefined,
    isFetching: false,
    isSubmitting: false,
};

/* ------------- Reducers ------------- */
function fetchContest(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isFetching: true,
        err: null,
    });
}

function fetchContestSuccess(state: any, { data, metadata }: any) {
    return Immutable.merge(state, {
        isFetching: false,
        err: null,
        data,
        metadata,
    });
}

function fetchContestFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isFetching: false,
        err,
    });
}

function fetchContests(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isFetching: true,
        err: null,
    });
}

function fetchContestsSuccess(state: any, { data, metadata }: any) {
    return Immutable.merge(state, {
        isFetching: false,
        err: null,
        data,
        metadata,
    });
}

function fetchContestsFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isFetching: false,
        err,
    });
}
function createContest(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isSubmitting: true,
        err: null,
    });
}

function createContestSuccess(state: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err: null,
    });
}

function createContestFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err,
    });
}

function fetchContestParticipants(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isFetching: true,
        err: null,
    });
}

function fetchContestParticipantsSuccess(state: any, { data, metadata }: any) {
    return Immutable.merge(state, {
        isFetching: false,
        err: null,
        data,
        metadata,
    });
}

function fetchContestParticipantsFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isFetching: false,
        err,
    });
}

const HANDLERS = {
    [Types.FETCH_CONTEST]: fetchContest,
    [Types.FETCH_CONTEST_SUCCESS]: fetchContestSuccess,
    [Types.FETCH_CONTEST_FAILURE]: fetchContestFailure,
    [Types.FETCH_CONTESTS]: fetchContests,
    [Types.FETCH_CONTESTS_SUCCESS]: fetchContestsSuccess,
    [Types.FETCH_CONTESTS_FAILURE]: fetchContestsFailure,
    [Types.CREATE_CONTEST]: createContest,
    [Types.CREATE_CONTEST_SUCCESS]: createContestSuccess,
    [Types.CREATE_CONTEST_FAILURE]: createContestFailure,
    [Types.FETCH_CONTEST_PARTICIPANTS]: fetchContestParticipants,
    [Types.FETCH_CONTEST_PARTICIPANTS_SUCCESS]: fetchContestParticipantsSuccess,
    [Types.FETCH_CONTEST_PARTICIPANTS_FAILURE]: fetchContestParticipantsFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
