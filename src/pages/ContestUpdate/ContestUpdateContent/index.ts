import { combineReducers } from 'redux';

// Component
export { default } from './ContestUpdateContent';

// Reducer
import { reducer as contestReducer } from './Contest';
export const reducer = combineReducers({
    contest: contestReducer,
});

// Saga
export { ContestUpdatePageContentContestSaga } from './Contest';
