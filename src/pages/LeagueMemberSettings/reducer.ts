// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { LeagueMemberSettingsPageTypes } from './actions';

/* ------------- Interface ------------- */
export interface LeagueMemberSettingsPageInterface {
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly account: any;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: LeagueMemberSettingsPageInterface = {
    isInitialized: false,
    err: undefined,
    account: undefined,
};

/* ------------- Reducers ------------- */
function init(state = INITIAL_STATE) {
    return Immutable.merge(state, {
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

const HANDLERS = {
    [LeagueMemberSettingsPageTypes.INIT]: init,
    [LeagueMemberSettingsPageTypes.INIT_SUCCESS]: initSuccess,
    [LeagueMemberSettingsPageTypes.INIT_FAILURE]: initFailure,
    [LeagueMemberSettingsPageTypes.TERMINATE]: terminate,
    [LeagueMemberSettingsPageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
