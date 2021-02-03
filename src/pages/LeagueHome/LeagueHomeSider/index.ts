import { combineReducers } from 'redux';

export { default } from './LeagueHomeSider';

// Reducer
import { reducer as contentReducer } from './LeagueHomeSiderContent';
export const reducer = combineReducers({
    content: contentReducer,
});

// Saga
export {
    LeagueHomePageSiderContentMemberStatsSaga,
    // LeagueHomePageSiderContentCalendarSaga,
} from './LeagueHomeSiderContent';
