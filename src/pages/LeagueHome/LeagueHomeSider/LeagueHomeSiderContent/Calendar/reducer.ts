// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { LeagueHomePageSiderContentCalendarTypes } from './actions';
import { LeagueHomePageSiderContentCalendarInterface } from './types';
import { generateContestHash } from '@pages/Home/HomeSider/HomeSiderContent/Calendar/utils';

/* ------------- Initial State ------------- */
const INITIAL_STATE: LeagueHomePageSiderContentCalendarInterface = {
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
    [LeagueHomePageSiderContentCalendarTypes.INIT]: init,
    [LeagueHomePageSiderContentCalendarTypes.INIT_SUCCESS]: initSuccess,
    [LeagueHomePageSiderContentCalendarTypes.INIT_FAILURE]: initFailure,
    [LeagueHomePageSiderContentCalendarTypes.TERMINATE]: terminate,
    [LeagueHomePageSiderContentCalendarTypes.SET]: set,
    [LeagueHomePageSiderContentCalendarTypes.FETCH_DATA]: fetchData,
    [LeagueHomePageSiderContentCalendarTypes.FETCH_DATA_SUCCESS]: fetchDataSuccess,
    [LeagueHomePageSiderContentCalendarTypes.FETCH_DATA_FAILURE]: fetchDataFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
