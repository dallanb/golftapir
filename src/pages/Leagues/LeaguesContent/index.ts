import { combineReducers } from 'redux';

// Component
export { default } from './LeaguesContent';

// Reducer
import { reducer as leaguesReducer } from './Leagues';
export const reducer = combineReducers({
    leagues: leaguesReducer,
});

// Saga
export { LeaguesPageContentLeaguesSaga } from './Leagues';
