import { combineReducers } from 'redux';

export { default } from './LeaguesSider';

// Reducer
import { reducer as contentReducer } from './LeaguesSiderContent';
export const reducer = combineReducers({
    content: contentReducer,
});
// Saga
export { LeaguesPageSiderContentSearchSaga } from './LeaguesSiderContent';
