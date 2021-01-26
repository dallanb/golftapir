// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { AuthTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';
import { ResetPasswordPageTypes } from './actions';
import { ResetPasswordPageInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ResetPasswordPageInterface = {
    isInitialized: false,
    isSubmitting: false,
    isSubmitted: false,
    err: undefined,
    title: CONSTANTS.PAGES.RESET_PASSWORD.TITLE,
    description: CONSTANTS.PAGES.RESET_PASSWORD.DESCRIPTION,
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
    [ResetPasswordPageTypes.INIT]: init,
    [ResetPasswordPageTypes.INIT_SUCCESS]: initSuccess,
    [ResetPasswordPageTypes.INIT_FAILURE]: initFailure,
    [ResetPasswordPageTypes.TERMINATE]: terminate,
    [ResetPasswordPageTypes.SET]: set,
    [ResetPasswordPageTypes.SET_FORM_INITIAL_VALUES]: setFormInitialValues,
    [AuthTypes.RESET_PASSWORD]: submit,
    [AuthTypes.RESET_PASSWORD_SUCCESS]: submitSuccess,
    [AuthTypes.RESET_PASSWORD_FAILURE]: submitFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
