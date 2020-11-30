// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ContestsCreatePageContentContestSearchCourseInterface } from './types';
import { ContestsCreatePageContentContestSearchCourseTypes } from './actions';

/* ------------- Initial State ------------- */
const INITIAL_STATE: ContestsCreatePageContentContestSearchCourseInterface = {
    isSearching: false,
    err: undefined,
    data: undefined,
};
/* ------------- Reducers ------------- */
function search(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isSearching: true,
    });
}

function searchSuccess(state = INITIAL_STATE, { data }: any) {
    return Immutable.merge(state, {
        isSearching: false,
        data,
    });
}

function searchFailure(state = INITIAL_STATE, { err }: any) {
    return Immutable.merge(state, {
        isSearching: false,
        err,
    });
}

const HANDLERS = {
    [ContestsCreatePageContentContestSearchCourseTypes.SEARCH]: search,
    [ContestsCreatePageContentContestSearchCourseTypes.SEARCH_SUCCESS]: searchSuccess,
    [ContestsCreatePageContentContestSearchCourseTypes.SEARCH_FAILURE]: searchFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
