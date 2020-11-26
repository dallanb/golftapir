import { combineReducers } from 'redux';

// Component
export { default } from './Competitors';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './CompetitorsContent';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
    }),
    data: dataReducer,
});

// Saga
export { default as CompetitorsPageSaga } from './saga';
export { CompetitorsPageContentCompetitorsSaga } from './CompetitorsContent';
// Routes
export { default as CompetitorsPageRoutes } from './routes';
