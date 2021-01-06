import { combineReducers } from 'redux';

// Component
export { default } from './MembersContent';

// Reducer
import { reducer as membersReducer } from './Members';
export const reducer = combineReducers({
    members: membersReducer,
});

// Saga
export { MembersPageContentMembersSaga } from './Members';
