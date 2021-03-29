import { combineReducers } from 'redux';

// Component
export { default } from './MembersSider';

// Reducer
import { reducer as memberActiveReducer } from './MemberActive';
export const reducer = combineReducers({
    memberActive: memberActiveReducer,
});
// Saga
export {
    MembersPageSiderSearchSaga,
    MembersPageSiderInvitesSaga,
} from './MemberActive';
