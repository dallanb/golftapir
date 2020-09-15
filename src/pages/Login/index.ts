// Component
export { default } from './Login';

// Reducer
import { combineReducers } from 'redux';
import { reducer } from './reducer';
import { reducer as auth } from '@reducers/AuthReducer';
export const loginPageReducer = combineReducers({
    ui: reducer,
    data: combineReducers({ auth }),
});

// Saga
export { default as LoginPageSaga } from './saga';
