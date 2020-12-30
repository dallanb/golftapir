import { combineReducers } from 'redux';

export { default } from './LeaguesSiderContent';

// Reducer
import { reducer as searchReducer } from './SearchInput';
export const reducer = combineReducers({
    search: searchReducer,
});

// Saga
export { LeaguesPageSiderContentSearchSaga } from './SearchInput';
