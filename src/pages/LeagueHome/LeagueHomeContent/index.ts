import { combineReducers } from 'redux';

// Component
export { default } from './LeagueHomeContent';

// Reducer
import { reducer as memberStatsReducer } from './MemberStats';
import { reducer as memberStandingsReducer } from './MemberStandings';
export const reducer = combineReducers({
    memberStats: memberStatsReducer,
    memberStandings: memberStandingsReducer,
});

// Saga
export { LeagueHomePageContentMemberStatsSaga } from './MemberStats';
export { LeagueHomePageContentMemberStandingsSaga } from './MemberStandings';
