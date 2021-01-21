// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { MembersCreatePageContentMemberTypes } from './actions';
import { MembersCreatePageContentMemberInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: MembersCreatePageContentMemberInterface = {
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
    [MembersCreatePageContentMemberTypes.INIT]: init,
    [MembersCreatePageContentMemberTypes.INIT_SUCCESS]: initSuccess,
    [MembersCreatePageContentMemberTypes.INIT_FAILURE]: initFailure,
    [MembersCreatePageContentMemberTypes.TERMINATE]: terminate,
    [MembersCreatePageContentMemberTypes.SET]: set,
    [MembersCreatePageContentMemberTypes.SET_INITIAL_VALUES]: setInitialValues,
    [MembersCreatePageContentMemberTypes.SET_RESULT]: setResult,
    [MembersCreatePageContentMemberTypes.SUBMIT]: submit,
    [MembersCreatePageContentMemberTypes.SUBMIT_SUCCESS]: submitSuccess,
    [MembersCreatePageContentMemberTypes.SUBMIT_FAILURE]: submitFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
