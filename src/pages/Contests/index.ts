import { combineReducers } from 'redux';

// Component
export { default } from './Contests';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './ContestsContent';
import { reducer as siderReducer } from './ContestsSider';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
        sider: siderReducer,
    }),
    data: dataReducer,
});

// Saga
export { default as ContestsPageSaga } from './saga';
export { ContestsPageContentContestsSaga } from './ContestsContent';
export { ContestsPageSiderSearchSaga } from './ContestsSider';
// Routes
export { default as ContestsPageRoutes } from './routes';
