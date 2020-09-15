// Component
export { default } from './ContestsCreate';

// Reducer
import { combineReducers } from 'redux';
import { reducer } from './reducer';
import { reducer as auth } from '@reducers/AuthReducer';
export const contestsCreatePageReducer = combineReducers({
    ui: reducer,
    data: combineReducers({ auth }),
});

// Saga
export { default as ContestsCreatePageSaga } from './saga';
