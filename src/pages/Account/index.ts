import { combineReducers } from 'redux';
// Component
export { default } from './Account';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './AccountContent';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
    }),
    data: dataReducer,
});

// Saga
export { default as AccountPageSaga } from './saga';
export { AccountPageContentAccountSaga } from './AccountContent';
// Routes
export { default as AccountPageRoutes } from './routes';
