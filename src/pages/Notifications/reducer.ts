// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { NotificationsPageTypes } from './actions';
import { NotificationsPageInterface } from './types';
import { NotificationTypes } from '@actions';

/* ------------- Initial State ------------- */
const INITIAL_STATE: NotificationsPageInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    title: CONSTANTS.PAGES.NOTIFICATIONS.TITLE,
    description: CONSTANTS.PAGES.NOTIFICATIONS.DESCRIPTION,
    notificationsList: {
        data: undefined,
        metadata: undefined,
        isFetching: false,
        append: false,
    },
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

function fetchNotifications(state: any, { append = false }: any) {
    return Immutable.merge(state, {
        notificationsList: {
            ...state.notificationsList,
            isFetching: true,
            append,
        },
    });
}

function fetchNotificationsSuccess(
    state: any,
    { data, metadata, isFetching = false }: any
) {
    return Immutable.merge(state, {
        notificationsList: {
            isFetching,
            data: state.notificationsList.append
                ? [...state.notificationsList.data, ...data]
                : data,
            metadata,
        },
    });
}

function fetchNotificationsFailure(state: any) {
    return Immutable.merge(state, {
        notificationsList: {
            ...state.notificationsList,
            isFetching: false,
        },
    });
}

const HANDLERS = {
    [NotificationsPageTypes.INIT]: init,
    [NotificationsPageTypes.INIT_SUCCESS]: initSuccess,
    [NotificationsPageTypes.INIT_FAILURE]: initFailure,
    [NotificationsPageTypes.TERMINATE]: terminate,
    [NotificationsPageTypes.SET]: set,
    [NotificationTypes.FETCH_NOTIFICATIONS]: fetchNotifications,
    [NotificationTypes.FETCH_NOTIFICATIONS_SUCCESS]: fetchNotificationsSuccess,
    [NotificationTypes.FETCH_NOTIFICATIONS_FAILURE]: fetchNotificationsFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
