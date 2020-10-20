// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { ContestUpdatePageInterface } from './types';
import { ContestUpdatePageTypes } from './actions';
import { ContestTypes } from '@actions';
import { get as _get } from 'lodash';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestUpdatePageInterface = {
    isFetching: false,
    isInitialized: false,
    isSubmitted: false,
    err: undefined,
    title: CONSTANTS.PAGES.CONTEST_UPDATE.TITLE,
    description: CONSTANTS.PAGES.CONTEST_UPDATE.DESCRIPTION,
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
    [ContestUpdatePageTypes.INIT]: init,
    [ContestUpdatePageTypes.INIT_SUCCESS]: initSuccess,
    [ContestUpdatePageTypes.INIT_FAILURE]: initFailure,
    [ContestUpdatePageTypes.TERMINATE]: terminate,
    [ContestUpdatePageTypes.SET]: set,
    [ContestUpdatePageTypes.UPDATE_CONTEST]: updateContest,
    [ContestUpdatePageTypes.UPDATE_CONTEST_SUCCESS]: updateContestSuccess,
    [ContestUpdatePageTypes.UPDATE_CONTEST_FAILURE]: updateContestFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
