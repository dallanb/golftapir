import { combineReducers } from 'redux';
// Component
export { default } from './ContestUpdate';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './ContestUpdateContent';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
    }),
    data: dataReducer,
});
// Saga
export { default as ContestUpdatePageSaga } from './saga';
export { ContestUpdatePageContentContestSaga } from './ContestUpdateContent';

// Routes
export { default as ContestUpdatePageRoutes } from './routes';
