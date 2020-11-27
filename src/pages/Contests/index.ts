import { combineReducers } from 'redux';

// Component
export { default } from './Contests';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './ContestsContent';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
    }),
    data: dataReducer,
});

// Saga
export { default as ContestsPageSaga } from './saga';
export { ContestsPageContentContestsSaga } from './ContestsContent';
// Routes
export { default as ContestsPageRoutes } from './routes';
