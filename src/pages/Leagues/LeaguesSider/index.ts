import { combineReducers } from 'redux';

export { default } from './LeaguesSider';

// Reducer
import { reducer as searchReducer } from './SearchInput';
export const reducer = combineReducers({
    search: searchReducer,
});

// Saga
export { LeaguesPageSiderSearchSaga } from './SearchInput';
