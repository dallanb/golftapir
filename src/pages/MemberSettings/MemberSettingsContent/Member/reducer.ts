// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { MemberSettingsPageContentMemberTypes } from './actions';
import { MemberSettingsPageContentMemberInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: MemberSettingsPageContentMemberInterface = {
    isSubmitting: false,
    isInitialized: false,
    err: undefined,
    initialValues: undefined,
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

function submit(state: any) {
    return Immutable.merge(state, {
        isSubmitting: true,
    });
}

function submitSuccess(state: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
    });
}

function submitFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err,
    });
}

const HANDLERS = {
    [MemberSettingsPageContentMemberTypes.INIT]: init,
    [MemberSettingsPageContentMemberTypes.INIT_SUCCESS]: initSuccess,
    [MemberSettingsPageContentMemberTypes.INIT_FAILURE]: initFailure,
    [MemberSettingsPageContentMemberTypes.TERMINATE]: terminate,
    [MemberSettingsPageContentMemberTypes.SET]: set,
    [MemberSettingsPageContentMemberTypes.SET_INITIAL_VALUES]: setInitialValues,
    [MemberSettingsPageContentMemberTypes.SUBMIT]: submit,
    [MemberSettingsPageContentMemberTypes.SUBMIT_SUCCESS]: submitSuccess,
    [MemberSettingsPageContentMemberTypes.SUBMIT_FAILURE]: submitFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
