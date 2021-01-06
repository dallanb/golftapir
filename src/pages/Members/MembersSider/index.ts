import { combineReducers } from 'redux';

// Component
export { default } from './MembersSider';

// Reducer
import { reducer as contentReducer } from './MembersSiderContent';
export const reducer = combineReducers({
    content: contentReducer,
});
// Saga
export { MembersPageSiderContentSearchSaga } from './MembersSiderContent';
