// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { LeaguesPageSiderContentSearchTypes } from './actions';
import { LeaguesPageSiderContentSearchInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: LeaguesPageSiderContentSearchInterface = {
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
    [LeaguesPageSiderContentSearchTypes.SEARCH]: search,
    [LeaguesPageSiderContentSearchTypes.SEARCH_SUCCESS]: searchSuccess,
    [LeaguesPageSiderContentSearchTypes.SEARCH_FAILURE]: searchFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
