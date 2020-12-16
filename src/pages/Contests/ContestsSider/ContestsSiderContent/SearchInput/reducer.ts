// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ContestsPageSiderContentSearchTypes } from './actions';
import { ContestsPageSiderContentSearchInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestsPageSiderContentSearchInterface = {
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
    [ContestsPageSiderContentSearchTypes.SEARCH]: search,
    [ContestsPageSiderContentSearchTypes.SEARCH_SUCCESS]: searchSuccess,
    [ContestsPageSiderContentSearchTypes.SEARCH_FAILURE]: searchFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
