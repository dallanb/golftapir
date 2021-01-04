import { combineReducers } from 'redux';

export { default } from './LeagueMembersSiderContent';

// Reducer
import { reducer as memberActiveReducer } from './MemberActive';
export const reducer = combineReducers({
    memberActive: memberActiveReducer,
});

// Saga
export { LeagueMembersPageSiderContentSearchSaga } from './MemberActive';
