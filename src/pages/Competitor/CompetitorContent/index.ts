import { combineReducers } from 'redux';

// Component
export { default } from './CompetitorContent';

// Reducer
import { reducer as competitorResultsReducer } from './CompetitorResults';
export const reducer = combineReducers({
    competitorResults: competitorResultsReducer,
});

// Saga
export { CompetitorPageContentCompetitorResultsSaga } from './CompetitorResults';
