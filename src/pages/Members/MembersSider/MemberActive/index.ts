import { combineReducers } from 'redux';

// Component
export { default } from './MemberActive';

// Reducer
import { reducer as searchReducer } from './SearchSelectInput';
import { reducer as invitesReducer } from './Invites';
export const reducer = combineReducers({
    search: searchReducer,
    invites: invitesReducer,
});

// Saga
export { MembersPageSiderSearchSaga } from './SearchSelectInput';
export { MembersPageSiderInvitesSaga } from './Invites';
