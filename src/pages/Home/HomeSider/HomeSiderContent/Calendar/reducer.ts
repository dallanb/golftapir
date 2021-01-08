// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { HomePageSiderContentCalendarTypes } from './actions';
import { HomePageSiderContentCalendarInterface } from './types';
import { generateContestHash } from '@pages/Home/HomeSider/HomeSiderContent/Calendar/utils';

/* ------------- Initial State ------------- */
const INITIAL_STATE: HomePageSiderContentCalendarInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    data: undefined,
    metadata: undefined,
    append: false,
    options: undefined,
    contestHash: undefined,
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

function terminate(state: any) {
    return Immutable.merge(state, {
        ...INITIAL_STATE,
    });
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
        contestHash: generateContestHash(
            state.append ? state.contestHash : INITIAL_STATE.contestHash,
            data
        ),
    });
}

function fetchDataFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isFetching: false,
        err,
    });
}

const HANDLERS = {
    [HomePageSiderContentCalendarTypes.INIT]: init,
    [HomePageSiderContentCalendarTypes.INIT_SUCCESS]: initSuccess,
    [HomePageSiderContentCalendarTypes.INIT_FAILURE]: initFailure,
    [HomePageSiderContentCalendarTypes.TERMINATE]: terminate,
    [HomePageSiderContentCalendarTypes.SET]: set,
    [HomePageSiderContentCalendarTypes.FETCH_DATA]: fetchData,
    [HomePageSiderContentCalendarTypes.FETCH_DATA_SUCCESS]: fetchDataSuccess,
    [HomePageSiderContentCalendarTypes.FETCH_DATA_FAILURE]: fetchDataFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
