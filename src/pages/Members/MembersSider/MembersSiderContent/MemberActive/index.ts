import { combineReducers } from 'redux';

// Component
export { default } from './MemberActive';

// Reducer
import { reducer as searchReducer } from './SearchSelectInput';
export const reducer = combineReducers({
    search: searchReducer,
});

// Saga
export { MembersPageSiderContentSearchSaga } from './SearchSelectInput';
