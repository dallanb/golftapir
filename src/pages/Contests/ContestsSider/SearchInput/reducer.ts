// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ContestsPageSiderSearchTypes } from './actions';
import { ContestsPageSiderSearchInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestsPageSiderSearchInterface = {
    key: undefined,
    isSearching: false,
    err: undefined,
};

/* ------------- Reducers ------------- */
function search(state = INITIAL_STATE, { key }: any) {
    return Immutable.merge(state, {
        key,
        isSearching: true,
        err: null,
    });
}

function searchSuccess(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isSearching: false,
        err: null,
    });
}

function searchFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isSearching: false,
        err,
    });
}

const HANDLERS = {
    [ContestsPageSiderSearchTypes.SEARCH]: search,
    [ContestsPageSiderSearchTypes.SEARCH_SUCCESS]: searchSuccess,
    [ContestsPageSiderSearchTypes.SEARCH_FAILURE]: searchFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
