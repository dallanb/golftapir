// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { ContestsUpdatePageInterface } from './types';
import { ContestsUpdatePageTypes } from './actions';
import { ContestTypes } from '@actions';
import { get as _get } from 'lodash';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestsUpdatePageInterface = {
    isFetching: false,
    isInitialized: false,
    isSubmitted: false,
    err: undefined,
    title: CONSTANTS.PAGES.CONTESTS_UPDATE.TITLE,
    description: CONSTANTS.PAGES.CONTESTS_UPDATE.DESCRIPTION,
    updateFormInitialValues: undefined,
    uuid: undefined,
    contest: undefined,
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

function updateContest(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isSubmitted: true,
    });
}

function updateContestSuccess(state = INITIAL_STATE, { data }: any) {
    const uuid = _get(data, ['uuid']);
    return Immutable.merge(state, {
        uuid,
    });
}

function updateContestFailure(state = INITIAL_STATE, { err }: any) {
    return Immutable.merge(state, {
        isSubmitted: false,
        err,
    });
}

const HANDLERS = {
    [ContestsUpdatePageTypes.INIT]: init,
    [ContestsUpdatePageTypes.INIT_SUCCESS]: initSuccess,
    [ContestsUpdatePageTypes.INIT_FAILURE]: initFailure,
    [ContestsUpdatePageTypes.TERMINATE]: terminate,
    [ContestsUpdatePageTypes.SET]: set,
    [ContestsUpdatePageTypes.UPDATE_CONTEST]: updateContest,
    [ContestsUpdatePageTypes.UPDATE_CONTEST_SUCCESS]: updateContestSuccess,
    [ContestsUpdatePageTypes.UPDATE_CONTEST_FAILURE]: updateContestFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
