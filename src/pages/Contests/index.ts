// Component
export { default } from './Contests';

// Reducer
import { combineReducers } from 'redux';
import { filterActions } from 'redux-ignore';
import constants from '@constants';
import { reducer } from './reducer';
import { reducer as contest } from '@reducers/ContestReducer';
export const contestsPageReducer = combineReducers({
    ui: reducer,
    data: combineReducers({
        contest: filterActions(
            contest,
            (action: any) => action.target === constants.TARGETS.CONTESTS_PAGE
        ),
    }),
});

// Saga
export { default as ContestsPageSaga } from './saga';

// Routes
export { default as ContestsPageRoutes } from './routes';
