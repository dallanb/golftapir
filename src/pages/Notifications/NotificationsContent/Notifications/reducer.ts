// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { NotificationsPageContentNotificationsTypes } from './actions';
import { NotificationsPageContentNotificationsInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: NotificationsPageContentNotificationsInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    data: undefined,
    metadata: undefined,
    append: false,
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

function fetchData(state: any, { append = false }: any) {
    return Immutable.merge(state, {
        isFetching: true,
        append,
    });
}

function fetchDataSuccess(
    state: any,
    { data, metadata, isFetching = false }: any
) {
    return Immutable.merge(state, {
        isFetching,
        data: state.append ? [...state.data, ...data] : data,
        metadata,
    });
}

function fetchDataFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isFetching: false,
        err,
    });
}

const HANDLERS = {
    [NotificationsPageContentNotificationsTypes.INIT]: init,
    [NotificationsPageContentNotificationsTypes.INIT_SUCCESS]: initSuccess,
    [NotificationsPageContentNotificationsTypes.INIT_FAILURE]: initFailure,
    [NotificationsPageContentNotificationsTypes.TERMINATE]: terminate,
    [NotificationsPageContentNotificationsTypes.SET]: set,
    [NotificationsPageContentNotificationsTypes.FETCH_DATA]: fetchData,
    [NotificationsPageContentNotificationsTypes.FETCH_DATA_SUCCESS]: fetchDataSuccess,
    [NotificationsPageContentNotificationsTypes.FETCH_DATA_FAILURE]: fetchDataFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
