import { combineReducers } from 'redux';

export { default } from './ContestsSiderContent';

// Reducer
import { reducer as searchReducer } from './SearchInput';
export const reducer = combineReducers({
    search: searchReducer,
});

// Saga
export { ContestsPageSiderContentSearchSaga } from './SearchInput';
