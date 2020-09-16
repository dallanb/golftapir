// Component

export { default } from './Register';

// Reducer
import { combineReducers } from 'redux';
import { reducer } from './reducer';
import { reducer as auth } from '@reducers/AuthReducer';
export const registerPageReducer = combineReducers({
    ui: reducer,
    data: combineReducers({ auth }),
});

// Saga
export { default as RegisterPageSaga } from './saga';

// Routes
export { default as RegisterPageRoutes } from './routes';
