import { combineReducers } from 'redux';

// Component
export { default } from './CompetitorsContent';

// Reducer
import { reducer as competitorsReducer } from './Competitors';
export const reducer = combineReducers({
    competitors: competitorsReducer,
});

// Saga
export { CompetitorsPageContentCompetitorsSaga } from './Competitors';
