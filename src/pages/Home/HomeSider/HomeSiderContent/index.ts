import { combineReducers } from 'redux';

// Component
export { default } from './HomeSiderContent';

// Reducer
import { reducer as calendarReducer } from './Calendar';
export const reducer = combineReducers({
    calendar: calendarReducer,
});

// Saga
export { HomePageSiderContentCalendarSaga } from './Calendar';
