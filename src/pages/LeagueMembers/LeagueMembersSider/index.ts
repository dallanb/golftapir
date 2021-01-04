import { combineReducers } from 'redux';

// Component
export { default } from './LeagueMembersSider';

// Reducer
import { reducer as contentReducer } from './LeagueMembersSiderContent';
export const reducer = combineReducers({
    content: contentReducer,
});
// Saga
export { LeagueMembersPageSiderContentSearchSaga } from './LeagueMembersSiderContent';
