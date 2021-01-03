import { combineReducers } from 'redux';

// Component
export { default } from './LeagueMembers';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './LeagueMembersContent';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
    }),
    data: dataReducer,
});

// Saga
export { default as LeagueMembersPageSaga } from './saga';
export { LeagueMembersPageContentMembersSaga } from './LeagueMembersContent';
// Routes
export { default as LeagueMembersPageRoutes } from './routes';
