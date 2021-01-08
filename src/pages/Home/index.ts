import { combineReducers } from 'redux';

// Component
export { default } from './Home';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as siderReducer } from './HomeSider';
export const reducer = combineReducers({
    data: dataReducer,
    ui: combineReducers({
        sider: siderReducer,
    }),
});

// Saga
export { default as HomePageSaga } from './saga';
export { HomePageSiderContentCalendarSaga } from './HomeSider';

// Routes
export { default as HomePageRoutes } from './routes';
