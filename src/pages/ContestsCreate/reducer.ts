// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { ContestsCreatePageInterface } from './types';
import { ContestsCreatePageTypes } from './actions';
import { ContestTypes } from '@actions';
import { get as _get } from 'lodash';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestsCreatePageInterface = {
    isFetching: false,
    isInitialized: false,
    isSubmitted: false,
    err: undefined,
    title: CONSTANTS.PAGES.CONTESTS_CREATE.TITLE,
    description: CONSTANTS.PAGES.CONTESTS_CREATE.DESCRIPTION,
    createFormInitialValues: undefined,
    createFormSearchParticipants: [],
    uuid: undefined,
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

function terminate() {
    return INITIAL_STATE;
}

function set(state: any, { data }: any) {
    return Immutable.merge(state, {
        ...data,
    });
}

function searchParticipants(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isFetching: true,
    });
}

function searchParticipantsSuccess(
    state = INITIAL_STATE,
    { data: createFormSearchParticipants }: any
) {
    return Immutable.merge(state, {
        isFetching: false,
        createFormSearchParticipants,
    });
}

function searchParticipantsFailure(state = INITIAL_STATE, { err }: any) {
    return Immutable.merge(state, {
        isFetching: false,
        err,
    });
}
function createContest(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isSubmitted: true,
    });
}

function createContestSuccess(state = INITIAL_STATE, { data }: any) {
    const uuid = _get(data, ['uuid']);
    return Immutable.merge(state, {
        uuid,
    });
}

function createContestFailure(state = INITIAL_STATE, { err }: any) {
    return Immutable.merge(state, {
        isSubmitted: false,
        err,
    });
}

const HANDLERS = {
    [ContestsCreatePageTypes.INIT]: init,
    [ContestsCreatePageTypes.INIT_SUCCESS]: initSuccess,
    [ContestsCreatePageTypes.INIT_FAILURE]: initFailure,
    [ContestsCreatePageTypes.TERMINATE]: terminate,
    [ContestsCreatePageTypes.SET]: set,
    [ContestsCreatePageTypes.SEARCH_PARTICIPANTS]: searchParticipants,
    [ContestsCreatePageTypes.SEARCH_PARTICIPANTS_SUCCESS]: searchParticipantsSuccess,
    [ContestsCreatePageTypes.SEARCH_PARTICIPANTS_FAILURE]: searchParticipantsFailure,
    [ContestsCreatePageTypes.CREATE_CONTEST]: createContest,
    [ContestsCreatePageTypes.CREATE_CONTEST_SUCCESS]: createContestSuccess,
    [ContestsCreatePageTypes.CREATE_CONTEST_FAILURE]: createContestFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
