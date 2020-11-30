import { combineReducers } from 'redux';

// Reducer
import { reducer as courseReducer } from './Course';
import { reducer as participantReducer } from './Participant';
export const reducer = combineReducers({
    course: courseReducer,
    participant: participantReducer,
});

// Saga
export { ContestsCreatePageContentContestSearchCourseSaga } from './Course';
export { ContestsCreatePageContentContestSearchParticipantSaga } from './Participant';
