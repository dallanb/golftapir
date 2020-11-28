// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { NotificationsPageTypes } from './actions';
import { NotificationsPageInterface } from './types';
import { NotificationTypes } from '@actions';

/* ------------- Initial State ------------- */
const INITIAL_STATE: NotificationsPageInterface = {
    isInitialized: false,
    err: undefined,
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

const HANDLERS = {
    [NotificationsPageTypes.INIT]: init,
    [NotificationsPageTypes.INIT_SUCCESS]: initSuccess,
    [NotificationsPageTypes.INIT_FAILURE]: initFailure,
    [NotificationsPageTypes.TERMINATE]: terminate,
    [NotificationsPageTypes.SET]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
