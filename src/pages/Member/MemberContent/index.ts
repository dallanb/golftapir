import { combineReducers } from 'redux';

// Component
export { default } from './MemberContent';

// Reducer
import { reducer as memberResultsReducer } from './MemberResults';
import { reducer as memberInfoReducer } from './MemberInfo';
export const reducer = combineReducers({
    memberResults: memberResultsReducer,
    memberInfo: memberInfoReducer,
});

// Saga
export { MemberPageContentMemberResultsSaga } from './MemberResults';
export { MemberPageContentMemberInfoSaga } from './MemberInfo';
