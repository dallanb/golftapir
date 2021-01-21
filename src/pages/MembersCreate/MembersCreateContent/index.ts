import { combineReducers } from 'redux';

// Component
export { default } from './MembersCreateContent';

// Reducer
import { reducer as memberReducer } from './Member';
export const reducer = combineReducers({
    member: memberReducer,
});

// Saga
export { MembersCreatePageContentMemberSaga } from './Member';
