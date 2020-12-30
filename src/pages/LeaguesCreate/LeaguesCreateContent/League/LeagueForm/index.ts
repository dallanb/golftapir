import { combineReducers } from 'redux';
// Component
export { default } from './LeagueForm';

// Reducer
import { reducer as searchReducer } from './LeagueFormSearch';
export const reducer = combineReducers({
    search: searchReducer,
});

// Saga
export { LeaguesCreatePageContentLeagueSearchParticipantSaga } from './LeagueFormSearch';
