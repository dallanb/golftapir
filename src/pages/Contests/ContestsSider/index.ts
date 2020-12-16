import { combineReducers } from 'redux';

export { default } from './ContestsSider';

// Reducer
import { reducer as contentReducer } from './ContestsSiderContent';
export const reducer = combineReducers({
    content: contentReducer,
});
// Saga
export { ContestsPageSiderContentSearchSaga } from './ContestsSiderContent';
