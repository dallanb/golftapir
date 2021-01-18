import { combineReducers } from 'redux';

// Component
export { default } from './LeagueHomeContent';

// Reducer
import { reducer as memberStandingsReducer } from './MemberStandings';
export const reducer = combineReducers({
    memberStandings: memberStandingsReducer,
});

// Saga
export { LeagueHomePageContentMemberStandingsSaga } from './MemberStandings';
