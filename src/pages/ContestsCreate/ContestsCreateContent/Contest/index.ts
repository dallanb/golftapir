import { combineReducers } from 'redux';

export { default } from './Contest';

// Reducer
// TODO: THIS MAY CAUSE ISSUES
import { reducer as formReducer } from './reducer';
import { reducer as searchReducer } from './ContestForm';
export const reducer = combineReducers({
    ...formReducer,
    ...searchReducer,
});

// Saga
export { default as ContestsCreatePageContentContestSaga } from './saga';
export {
    ContestsCreatePageContentContestSearchCourseSaga,
    ContestsCreatePageContentContestSearchParticipantSaga,
} from './ContestForm';
