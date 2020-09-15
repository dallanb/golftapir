// Component
export { default } from './Account';

// Reducer
import { combineReducers } from 'redux';
import { filterActions } from 'redux-ignore';
import constants from '@constants';
import { reducer } from './reducer';
import { reducer as account } from '@reducers/AccountReducer';
import { reducer as auth } from '@reducers/AuthReducer';
export const accountPageReducer = combineReducers({
    ui: reducer,
    data: combineReducers({
        account: filterActions(
            account,
            (action: any) => action.target === constants.TARGETS.ACCOUNT_PAGE
        ),
        auth,
    }),
});

// Saga
export { default as AccountPageSaga } from './saga';

// Routes
export { default as AccountPageRoutes } from './routes';
