// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { LeagueMembersPageSiderContentSearchTypes } from './actions';
import { LeagueMembersPageSiderContentSearchInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: LeagueMembersPageSiderContentSearchInterface = {
    key: undefined,
    isSearching: false,
    err: undefined,
    data: undefined
};

/* ------------- Reducers ------------- */
function search(state = INITIAL_STATE, { key }: any) {
    return Immutable.merge(state, {
        key,
        isSearching: true,
        err: null,
    });
}

function searchSuccess(state = INITIAL_STATE, {data}: any) {
    return Immutable.merge(state, {
        isSearching: false,
        err: null,
        data
    });
}

function searchFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isSearching: false,
        err,
    });
}

const HANDLERS = {
    [LeagueMembersPageSiderContentSearchTypes.SEARCH]: search,
    [LeagueMembersPageSiderContentSearchTypes.SEARCH_SUCCESS]: searchSuccess,
    [LeagueMembersPageSiderContentSearchTypes.SEARCH_FAILURE]: searchFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
