import { combineReducers } from 'redux';

// Component
export { default } from './Home';

// Reducer
import { reducer as dataReducer } from './reducer';
export const reducer = combineReducers({
    data: dataReducer,
});

// Saga
export { default as HomePageSaga } from './saga';

// Routes
export { default as HomePageRoutes } from './routes';
