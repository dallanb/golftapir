// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { MemberPageContentMemberInfoTypes } from './actions';
import { MemberPageContentMemberInfoInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: MemberPageContentMemberInfoInterface = {
    isInitialized: false,
    err: undefined,
    initialValues: undefined,
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

function setInitialValues(state: any, { initialValues }: any) {
    return Immutable.merge(state, {
        initialValues,
    });
}

const HANDLERS = {
    [MemberPageContentMemberInfoTypes.INIT]: init,
    [MemberPageContentMemberInfoTypes.INIT_SUCCESS]: initSuccess,
    [MemberPageContentMemberInfoTypes.INIT_FAILURE]: initFailure,
    [MemberPageContentMemberInfoTypes.TERMINATE]: terminate,
    [MemberPageContentMemberInfoTypes.SET]: set,
    [MemberPageContentMemberInfoTypes.SET_INITIAL_VALUES]: setInitialValues,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
