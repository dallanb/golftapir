import { combineReducers } from 'redux';

// Component
export { default } from './Leagues';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './LeaguesContent';
import { reducer as siderReducer } from './LeaguesSider';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
        sider: siderReducer,
    }),
    data: dataReducer,
});

// Saga
export { default as LeaguesPageSaga } from './saga';
export { LeaguesPageContentLeaguesSaga } from './LeaguesContent';
export { LeaguesPageSiderContentSearchSaga } from './LeaguesSider';
// Routes
export { default as LeaguesPageRoutes } from './routes';
