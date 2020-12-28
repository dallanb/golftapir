import { combineReducers } from 'redux';

// Component
export { default } from './ContestsCreate';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './ContestsCreateContent';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
    }),
    data: dataReducer,
});

// Saga
export { default as ContestsCreatePageSaga } from './saga';
export {
    ContestsCreatePageContentContestSaga,
    ContestsCreatePageContentContestSearchCourseSaga,
    ContestsCreatePageContentContestSearchParticipantSaga,
} from './ContestsCreateContent';

// Routes
export { default as ContestsCreatePageRoutes } from './routes';
