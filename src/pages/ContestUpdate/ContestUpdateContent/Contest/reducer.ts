// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ContestUpdatePageContentContestTypes } from './actions';
import { ContestUpdatePageContentContestInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestUpdatePageContentContestInterface = {
    isSubmitting: false,
    isSubmitted: false,
    isInitialized: false,
    err: undefined,
    initialValues: undefined,
    uuid: undefined,
};

/* ------------- Reducers ------------- */
function init(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        ...INITIAL_STATE,
        isInitialized: false,
        err: null,
    });
}

function initSuccess(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isInitialized: true,
        err: null,
    });
}

function initFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
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
function setInitialValues(state: any, { initialValues }: any) {
    return Immutable.merge(state, {
        initialValues,
    });
}

function setUUID(state: any, { uuid }: any) {
    return Immutable.merge(state, {
        uuid,
    });
}

function submit(state: any) {
    return Immutable.merge(state, {
        isSubmitting: true,
    });
}

function submitSuccess(state: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        isSubmitted: true,
    });
}

function submitFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err,
    });
}

const HANDLERS = {
    [ContestUpdatePageContentContestTypes.INIT]: init,
    [ContestUpdatePageContentContestTypes.INIT_SUCCESS]: initSuccess,
    [ContestUpdatePageContentContestTypes.INIT_FAILURE]: initFailure,
    [ContestUpdatePageContentContestTypes.TERMINATE]: terminate,
    [ContestUpdatePageContentContestTypes.SET]: set,
    [ContestUpdatePageContentContestTypes.SET_INITIAL_VALUES]: setInitialValues,
    [ContestUpdatePageContentContestTypes.SET_UUID]: setUUID,
    [ContestUpdatePageContentContestTypes.SUBMIT]: submit,
    [ContestUpdatePageContentContestTypes.SUBMIT_SUCCESS]: submitSuccess,
    [ContestUpdatePageContentContestTypes.SUBMIT_FAILURE]: submitFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
