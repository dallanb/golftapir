// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { AuthTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';
import { ForgotPasswordPageTypes } from './actions';
import { ForgotPasswordPageInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ForgotPasswordPageInterface = {
    isInitialized: false,
    isSubmitting: false,
    isSubmitted: false,
    err: undefined,
    title: CONSTANTS.PAGES.VERIFY.TITLE,
    description: CONSTANTS.PAGES.VERIFY.DESCRIPTION,
    formInitialValues: undefined,
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

function setFormInitialValues(state: any, { formInitialValues }: any) {
    return Immutable.merge(state, {
        formInitialValues,
    });
}

function submit(state: any) {
    return Immutable.merge(state, {
        isSubmitting: true,
        isSubmitted: false,
    });
}
function submitSuccess(state: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        isSubmitted: true,
    });
}
function submitFailure(state: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        isSubmitted: false,
    });
}

const HANDLERS = {
    [ForgotPasswordPageTypes.INIT]: init,
    [ForgotPasswordPageTypes.INIT_SUCCESS]: initSuccess,
    [ForgotPasswordPageTypes.INIT_FAILURE]: initFailure,
    [ForgotPasswordPageTypes.TERMINATE]: terminate,
    [ForgotPasswordPageTypes.SET]: set,
    [ForgotPasswordPageTypes.SET_FORM_INITIAL_VALUES]: setFormInitialValues,
    [AuthTypes.FORGOT_PASSWORD]: submit,
    [AuthTypes.FORGOT_PASSWORD_SUCCESS]: submitSuccess,
    [AuthTypes.FORGOT_PASSWORD_FAILURE]: submitFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
