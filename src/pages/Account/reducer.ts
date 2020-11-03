// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { AccountPageTypes } from './actions';

/* ------------- Interface ------------- */
export interface AccountPageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
    readonly data: any;
    readonly updateFormInitialValues: any;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: AccountPageInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    title: CONSTANTS.PAGES.ACCOUNT.TITLE,
    description: CONSTANTS.PAGES.ACCOUNT.DESCRIPTION,
    updateFormInitialValues: undefined,
    data: undefined,
};

/* ------------- Reducers ------------- */
function init(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        ...INITIAL_STATE,
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

const HANDLERS = {
    [AccountPageTypes.INIT]: init,
    [AccountPageTypes.INIT_SUCCESS]: initSuccess,
    [AccountPageTypes.INIT_FAILURE]: initFailure,
    [AccountPageTypes.TERMINATE]: terminate,
    [AccountPageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
