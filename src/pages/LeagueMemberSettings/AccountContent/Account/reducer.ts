// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { LeagueMemberSettingsPageContentLeagueMemberSettingsTypes } from './actions';
import { LeagueMemberSettingsPageContentLeagueMemberSettingsInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: LeagueMemberSettingsPageContentLeagueMemberSettingsInterface = {
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
    [LeagueMemberSettingsPageContentLeagueMemberSettingsTypes.INIT]: init,
    [LeagueMemberSettingsPageContentLeagueMemberSettingsTypes.INIT_SUCCESS]: initSuccess,
    [LeagueMemberSettingsPageContentLeagueMemberSettingsTypes.INIT_FAILURE]: initFailure,
    [LeagueMemberSettingsPageContentLeagueMemberSettingsTypes.TERMINATE]: terminate,
    [LeagueMemberSettingsPageContentLeagueMemberSettingsTypes.SET]: set,
    [LeagueMemberSettingsPageContentLeagueMemberSettingsTypes.SET_INITIAL_VALUES]: setInitialValues,
    [LeagueMemberSettingsPageContentLeagueMemberSettingsTypes.SUBMIT]: submit,
    [LeagueMemberSettingsPageContentLeagueMemberSettingsTypes.SUBMIT_SUCCESS]: submitSuccess,
    [LeagueMemberSettingsPageContentLeagueMemberSettingsTypes.SUBMIT_FAILURE]: submitFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
