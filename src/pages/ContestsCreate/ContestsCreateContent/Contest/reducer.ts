// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ContestsCreatePageContentContestTypes } from './actions';
import { ContestsCreatePageContentContestInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestsCreatePageContentContestInterface = {
    isSubmitting: false,
    isSubmitted: false,
    isInitialized: false,
    err: undefined,
    initialValues: undefined,
    result: undefined,
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

function setResult(state: any, { result }: any) {
    return Immutable.merge(state, {
        result,
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
    [ContestsCreatePageContentContestTypes.INIT]: init,
    [ContestsCreatePageContentContestTypes.INIT_SUCCESS]: initSuccess,
    [ContestsCreatePageContentContestTypes.INIT_FAILURE]: initFailure,
    [ContestsCreatePageContentContestTypes.TERMINATE]: terminate,
    [ContestsCreatePageContentContestTypes.SET]: set,
    [ContestsCreatePageContentContestTypes.SET_INITIAL_VALUES]: setInitialValues,
    [ContestsCreatePageContentContestTypes.SET_RESULT]: setResult,
    [ContestsCreatePageContentContestTypes.SUBMIT]: submit,
    [ContestsCreatePageContentContestTypes.SUBMIT_SUCCESS]: submitSuccess,
    [ContestsCreatePageContentContestTypes.SUBMIT_FAILURE]: submitFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
