export { default } from './Competitor';
import { combineReducers } from 'redux';

// Reducer
import { reducer as dataReducer } from './reducer';
import { competitorResultsReducer as contentCompetitorResultsReducer } from './CompetitorContent';
export const reducer = combineReducers({
    ui: combineReducers({
        content: combineReducers({
            competitorResults: contentCompetitorResultsReducer,
        }),
    }),
    data: dataReducer,
});

// Saga
export { default as CompetitorPageSaga } from './saga';
export { CompetitorPageContentCompetitorResultsSaga } from './CompetitorContent';

// Routes
export { default as CompetitorPageRoutes } from './routes';
