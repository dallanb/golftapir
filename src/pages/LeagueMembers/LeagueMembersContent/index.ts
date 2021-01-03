import { combineReducers } from 'redux';

// Component
export { default } from './LeagueMembersContent';

// Reducer
import { reducer as membersReducer } from './Members';
export const reducer = combineReducers({
    members: membersReducer,
});

// Saga
export { LeagueMembersPageContentMembersSaga } from './Members';
