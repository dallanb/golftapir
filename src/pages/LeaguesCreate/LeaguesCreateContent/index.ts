import { combineReducers } from 'redux';

// Component
export { default } from './LeaguesCreateContent';

// Reducer
import { reducer as leagueReducer } from './League';
export const reducer = combineReducers({
    league: leagueReducer,
});

// Saga
export { LeaguesCreatePageContentLeagueSaga } from // LeaguesCreatePageContentLeagueSearchMemberSaga,
'./League';
