import { combineReducers } from 'redux';

// Component
export { default } from './Members';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './MembersContent';
import { reducer as siderReducer } from './MembersSider';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
        sider: siderReducer,
    }),
    data: dataReducer,
});

// Saga
export { default as MembersPageSaga } from './saga';
export { MembersPageContentMembersSaga } from './MembersContent';
export {
    MembersPageSiderSearchSaga,
    MembersPageSiderInvitesSaga,
} from './MembersSider';
// Routes
export { default as MembersPageRoutes } from './routes';
