import { combineReducers } from 'redux';

// Component
export { default } from './AccountContent';

// Reducer
import { reducer as accountReducer } from './Account';
export const reducer = combineReducers({
    account: accountReducer,
});

// Saga
export { AccountPageContentAccountSaga } from './Account';
