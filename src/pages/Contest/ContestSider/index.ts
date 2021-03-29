import { combineReducers } from 'redux';

// Component
export { default } from './ContestSider';

// Reducer
import { reducer as courseReducer } from './Course';
import { reducer as participantActiveReducer } from './ParticipantActive';
import { reducer as participantCompletedReducer } from './ParticipantCompleted';
export const reducer = combineReducers({
    course: courseReducer,
    participantActive: participantActiveReducer,
    participantCompleted: participantCompletedReducer,
});

// Saga
export { ContestPageSiderCourseSaga } from './Course';
export {
    ContestPageSiderParticipantActiveContestActiveSaga,
    ContestPageSiderParticipantActiveContestPendingSaga,
    ContestStrokeUpdateChannel,
} from './ParticipantActive';

export { ContestPageSiderParticipantCompletedContestCompletedSaga } from './ParticipantCompleted';
