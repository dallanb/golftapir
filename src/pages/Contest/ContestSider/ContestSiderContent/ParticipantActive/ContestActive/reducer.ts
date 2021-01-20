// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ContestPageSiderContentParticipantActiveContestActiveTypes } from './actions';
import { ContestPageSiderContentParticipantActiveContestActiveInterface } from './types';
import { ContestPageTypes } from '@pages/Contest/actions';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestPageSiderContentParticipantActiveContestActiveInterface = {
    isInitialized: false,
    err: undefined,
    sheet: undefined,
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

function setSheet(state: any, { sheet }: any) {
    return Immutable.merge(state, {
        sheet,
    });
}

function holeStrokeUpdateSuccess(state = INITIAL_STATE, { hole }: any) {
    const holes = Object.assign({}, state.sheet.holes, hole);
    return Immutable.merge(state, {
        sheet: { ...state.sheet, holes },
    });
}

const HANDLERS = {
    [ContestPageSiderContentParticipantActiveContestActiveTypes.INIT]: init,
    [ContestPageSiderContentParticipantActiveContestActiveTypes.INIT_SUCCESS]: initSuccess,
    [ContestPageSiderContentParticipantActiveContestActiveTypes.INIT_FAILURE]: initFailure,
    [ContestPageSiderContentParticipantActiveContestActiveTypes.TERMINATE]: terminate,
    [ContestPageSiderContentParticipantActiveContestActiveTypes.SET]: set,
    [ContestPageSiderContentParticipantActiveContestActiveTypes.SET_SHEET]: setSheet,
    [ContestPageSiderContentParticipantActiveContestActiveTypes.HOLE_STROKE_UPDATE_SUCCESS]: holeStrokeUpdateSuccess,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
