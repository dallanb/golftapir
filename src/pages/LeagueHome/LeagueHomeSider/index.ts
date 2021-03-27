import { combineReducers } from 'redux';

export { default } from './LeagueHomeSider';

// Reducer
import { reducer as memberStatsReducer } from './MemberStats';
export const reducer = combineReducers({
    memberStats: memberStatsReducer,
});

// Saga
export { LeagueHomePageSiderMemberStatsSaga } from './MemberStats';
