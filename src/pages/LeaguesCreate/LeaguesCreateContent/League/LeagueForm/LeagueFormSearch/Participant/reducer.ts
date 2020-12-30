// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { LeaguesCreatePageContentLeagueSearchParticipantInterface } from './types';
import { LeaguesCreatePageContentLeagueSearchParticipantTypes } from './actions';

/* ------------- Initial State ------------- */
const INITIAL_STATE: LeaguesCreatePageContentLeagueSearchParticipantInterface = {
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
    [LeaguesCreatePageContentLeagueSearchParticipantTypes.SEARCH]: search,
    [LeaguesCreatePageContentLeagueSearchParticipantTypes.SEARCH_SUCCESS]: searchSuccess,
    [LeaguesCreatePageContentLeagueSearchParticipantTypes.SEARCH_FAILURE]: searchFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
