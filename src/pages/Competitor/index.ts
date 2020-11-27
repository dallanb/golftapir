import { combineReducers } from 'redux';

// Component
export { default } from './Competitor';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './CompetitorContent';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
    }),
    data: dataReducer,
});

// Saga
export { default as CompetitorPageSaga } from './saga';
export { CompetitorPageContentCompetitorResultsSaga } from './CompetitorContent';

// Routes
export { default as CompetitorPageRoutes } from './routes';
