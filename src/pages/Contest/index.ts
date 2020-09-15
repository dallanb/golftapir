// Component
export { default } from './Contest';

// Reducer
import { combineReducers } from 'redux';
import { filterActions } from 'redux-ignore';
import constants from '@constants';
import { reducer } from './reducer';
import { reducer as account } from '@reducers/AccountReducer';
import { reducer as contest } from '@reducers/ContestReducer';
export const contestPageReducer = combineReducers({
    ui: reducer,
    data: combineReducers({
        account: filterActions(
            account,
            (action: any) => action.target === constants.TARGETS.CONTEST_PAGE
        ),
        contest: filterActions(
            contest,
            (action: any) => action.target === constants.TARGETS.CONTEST_PAGE
        ),
    }),
});

// Saga
export { default as ContestPageSaga } from './saga';
