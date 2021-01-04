import { combineReducers } from 'redux';

// Component
export { default } from './LeagueMembers';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './LeagueMembersContent';
import { reducer as siderReducer } from './LeagueMembersSider';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
        sider: siderReducer,
    }),
    data: dataReducer,
});

// Saga
export { default as LeagueMembersPageSaga } from './saga';
export { LeagueMembersPageContentMembersSaga } from './LeagueMembersContent';
export { LeagueMembersPageSiderContentSearchSaga } from './LeagueMembersSider';
// Routes
export { default as LeagueMembersPageRoutes } from './routes';
