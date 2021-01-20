import { combineReducers } from 'redux';

// Component
export { default } from './ContestSiderContent';

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

export { ContestPageSiderContentCourseSaga } from './Course';
export {
    ContestPageSiderContentParticipantActiveContestActiveSaga,
    ContestPageSiderContentParticipantActiveContestPendingSaga,
    ContestStrokeUpdateChannel,
} from './ParticipantActive';

export { ContestPageSiderContentParticipantCompletedContestCompletedSaga } from './ParticipantCompleted';
