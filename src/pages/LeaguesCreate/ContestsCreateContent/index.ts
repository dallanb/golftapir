import { combineReducers } from 'redux';

// Component
export { default } from './ContestsCreateContent';

// Reducer
import { reducer as contestReducer } from './Contest';
export const reducer = combineReducers({
    contest: contestReducer,
});

// Saga
export {
    ContestsCreatePageContentContestSaga,
    ContestsCreatePageContentContestSearchCourseSaga,
    ContestsCreatePageContentContestSearchParticipantSaga,
} from './Contest';
