import { combineReducers } from 'redux';

// Component
export { default } from './MemberSettingsContent';

// Reducer
import { reducer as memberReducer } from './Member';
export const reducer = combineReducers({
    member: memberReducer,
});

// Saga
export { MemberSettingsPageContentMemberSaga } from './Member';
