import { combineReducers } from 'redux';

export { default } from './LeagueMembersSiderContent';

// Reducer
import { reducer as searchReducer } from './SearchSelectInput';
export const reducer = combineReducers({
    search: searchReducer,
});

// Saga
export { LeagueMembersPageSiderContentSearchSaga } from './SearchSelectInput';
