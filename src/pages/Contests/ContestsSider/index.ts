import { combineReducers } from 'redux';

export { default } from './ContestsSider';

// Reducer
import { reducer as searchReducer } from './SearchInput';
export const reducer = combineReducers({
    search: searchReducer,
});

// Saga
export { ContestsPageSiderSearchSaga } from './SearchInput';
