import { combineReducers } from 'redux';

// Component
export { default } from './LeagueHomeContent';

// Reducer
import { reducer as memberStatsReducer } from './MemberStats';
export const reducer = combineReducers({
    memberStats: memberStatsReducer,
});

// Saga
export { LeagueHomePageContentMemberStatsSaga } from './MemberStats';
