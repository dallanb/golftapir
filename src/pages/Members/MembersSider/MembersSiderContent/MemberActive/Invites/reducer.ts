// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { MembersPageSiderContentInvitesTypes } from './actions';
import { MembersPageSiderContentInvitesInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: MembersPageSiderContentInvitesInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    data: undefined,
    metadata: undefined,
    append: false,
    options: undefined,
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

function fetchData(state: any, { options, append = false }: any) {
    return Immutable.merge(state, {
        isFetching: true,
        options,
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
    [MembersPageSiderContentInvitesTypes.INIT]: init,
    [MembersPageSiderContentInvitesTypes.INIT_SUCCESS]: initSuccess,
    [MembersPageSiderContentInvitesTypes.INIT_FAILURE]: initFailure,
    [MembersPageSiderContentInvitesTypes.TERMINATE]: terminate,
    [MembersPageSiderContentInvitesTypes.SET]: set,
    [MembersPageSiderContentInvitesTypes.FETCH_DATA]: fetchData,
    [MembersPageSiderContentInvitesTypes.FETCH_DATA_SUCCESS]: fetchDataSuccess,
    [MembersPageSiderContentInvitesTypes.FETCH_DATA_FAILURE]: fetchDataFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
