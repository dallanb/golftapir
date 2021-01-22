import { combineReducers } from 'redux';

export { default } from './MembersSiderContent';

// Reducer
import { reducer as memberActiveReducer } from './MemberActive';
export const reducer = combineReducers({
    memberActive: memberActiveReducer,
});

// Saga
export {
    MembersPageSiderContentSearchSaga,
    MembersPageSiderContentInvitesSaga,
} from './MemberActive';
