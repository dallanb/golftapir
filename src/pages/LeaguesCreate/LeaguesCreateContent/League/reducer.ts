// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { LeaguesCreatePageContentLeagueTypes } from './actions';
import { LeaguesCreatePageContentLeagueInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: LeaguesCreatePageContentLeagueInterface = {
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
    [LeaguesCreatePageContentLeagueTypes.INIT]: init,
    [LeaguesCreatePageContentLeagueTypes.INIT_SUCCESS]: initSuccess,
    [LeaguesCreatePageContentLeagueTypes.INIT_FAILURE]: initFailure,
    [LeaguesCreatePageContentLeagueTypes.TERMINATE]: terminate,
    [LeaguesCreatePageContentLeagueTypes.SET]: set,
    [LeaguesCreatePageContentLeagueTypes.SET_INITIAL_VALUES]: setInitialValues,
    [LeaguesCreatePageContentLeagueTypes.SET_RESULT]: setResult,
    [LeaguesCreatePageContentLeagueTypes.SUBMIT]: submit,
    [LeaguesCreatePageContentLeagueTypes.SUBMIT_SUCCESS]: submitSuccess,
    [LeaguesCreatePageContentLeagueTypes.SUBMIT_FAILURE]: submitFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
