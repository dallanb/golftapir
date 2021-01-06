// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { MembersPageSiderContentSearchTypes } from './actions';
import { MembersPageSiderContentSearchInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: MembersPageSiderContentSearchInterface = {
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

const HANDLERS = {
    [MembersPageSiderContentSearchTypes.SEARCH]: search,
    [MembersPageSiderContentSearchTypes.SEARCH_SUCCESS]: searchSuccess,
    [MembersPageSiderContentSearchTypes.SEARCH_FAILURE]: searchFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
