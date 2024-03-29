// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { MembersPageSiderSearchTypes } from './actions';
import { MembersPageSiderSearchInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: MembersPageSiderSearchInterface = {
    key: undefined,
    isSearching: false,
    err: undefined,
    data: undefined,
};

/* ------------- Reducers ------------- */
function search(state = INITIAL_STATE, { key }: any) {
    return Immutable.merge(state, {
        key,
        isSearching: true,
        err: null,
    });
}

function searchSuccess(state = INITIAL_STATE, { data }: any) {
    return Immutable.merge(state, {
        isSearching: false,
        err: null,
        data,
    });
}

function searchFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isSearching: false,
        err,
    });
}

function clearSearch(state: any) {
    return Immutable.merge(state, {
        key: INITIAL_STATE.key,
        data: INITIAL_STATE.data,
    });
}

const HANDLERS = {
    [MembersPageSiderSearchTypes.SEARCH]: search,
    [MembersPageSiderSearchTypes.SEARCH_SUCCESS]: searchSuccess,
    [MembersPageSiderSearchTypes.SEARCH_FAILURE]: searchFailure,
    [MembersPageSiderSearchTypes.CLEAR_SEARCH]: clearSearch,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
