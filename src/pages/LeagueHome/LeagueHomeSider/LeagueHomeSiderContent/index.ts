import { combineReducers } from 'redux';

export { default } from './LeagueHomeSiderContent';

// Reducer
import { reducer as memberStatsReducer } from './MemberStats';
import { reducer as calendarReducer } from './Calendar';

export const reducer = combineReducers({
    calendar: calendarReducer,
    memberStats: memberStatsReducer,
});

// Saga
export { LeagueHomePageSiderContentMemberStatsSaga } from './MemberStats';
export { LeagueHomePageSiderContentCalendarSaga } from './Calendar';
