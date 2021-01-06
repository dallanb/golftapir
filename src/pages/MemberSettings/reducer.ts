// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { MemberSettingsPageTypes } from './actions';

/* ------------- Interface ------------- */
export interface MemberSettingsPageInterface {
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly member: any;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: MemberSettingsPageInterface = {
    isInitialized: false,
    err: undefined,
    member: undefined,
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
    [MemberSettingsPageTypes.INIT]: init,
    [MemberSettingsPageTypes.INIT_SUCCESS]: initSuccess,
    [MemberSettingsPageTypes.INIT_FAILURE]: initFailure,
    [MemberSettingsPageTypes.TERMINATE]: terminate,
    [MemberSettingsPageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
