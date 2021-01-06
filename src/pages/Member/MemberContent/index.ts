import { combineReducers } from 'redux';

// Component
export { default } from './MemberContent';

// Reducer
import { reducer as memberResultsReducer } from './MemberResults';
export const reducer = combineReducers({
    memberResults: memberResultsReducer,
});

// Saga
export { MemberPageContentMemberResultsSaga } from './MemberResults';
