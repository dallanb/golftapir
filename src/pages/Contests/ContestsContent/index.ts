import { combineReducers } from 'redux';

// Component
export { default } from './ContestsContent';

// Reducer
import { reducer as contestsReducer } from './Contests';
export const reducer = combineReducers({
    contests: contestsReducer,
});

// Saga
export { ContestsPageContentContestsSaga } from './Contests';
