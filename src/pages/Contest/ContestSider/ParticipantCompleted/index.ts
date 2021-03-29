import { combineReducers } from 'redux';

// Component
export { default } from './ParticipantCompleted';

// Reducer
import { reducer as contestCompletedReducer } from './ContestCompleted';
export const reducer = combineReducers({
    contestCompleted: contestCompletedReducer,
});

// Saga
export { ContestPageSiderParticipantCompletedContestCompletedSaga } from './ContestCompleted';
