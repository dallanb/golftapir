import { combineReducers } from 'redux';

// Component
export { default } from './LeagueHome';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as siderReducer } from './LeagueHomeSider';
export const reducer = combineReducers({
    data: dataReducer,
    ui: combineReducers({
        sider: siderReducer,
    }),
});

// Saga
export { default as LeagueHomePageSaga } from './saga';
export { LeagueHomePageSiderContentCalendarSaga } from './LeagueHomeSider';

// Routes
export { default as LeagueHomePageRoutes } from './routes';
