import { combineReducers } from 'redux';

// Component
export { default } from './League';

// Reducer
import { reducer as dataReducer } from './reducer';
export const reducer = combineReducers({
    data: dataReducer,
});

// Saga
export { default as LeaguePageSaga } from './saga';

// Routes
export { default as LeaguePageRoutes } from './routes';
