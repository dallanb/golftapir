import { combineReducers } from 'redux';
// Component
export { default } from './ContestForm';

// Reducer
import { reducer as searchReducer } from './ContestFormSearch';
export const reducer = combineReducers({
    search: searchReducer,
});

// Saga
export {
    ContestsCreatePageContentContestSearchCourseSaga,
    ContestsCreatePageContentContestSearchParticipantSaga,
} from './ContestFormSearch';
