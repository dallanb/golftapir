import { combineReducers } from 'redux';

export { default } from './LeagueHomeSiderContent';

// Reducer
import { reducer as calendarReducer } from './Calendar';
export const reducer = combineReducers({
    calendar: calendarReducer,
});

// Saga
export { LeagueHomePageSiderContentCalendarSaga } from './Calendar';
