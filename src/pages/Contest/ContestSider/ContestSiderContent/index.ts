import { combineReducers } from 'redux';

// Component
export { default } from './ContestSiderContent';

// Reducer
import { reducer as participantActiveReducer } from './ParticipantActive';
import { reducer as participantCompletedReducer } from './ParticipantCompleted';
export const reducer = combineReducers({
    participantActive: participantActiveReducer,
    participantCompleted: participantCompletedReducer,
});

// Saga
export {
    ContestPageSiderContentParticipantActiveContestActiveSaga,
    ContestPageSiderContentParticipantActiveContestPendingSaga,
} from './ParticipantActive';

export { ContestPageSiderContentParticipantCompletedContestCompletedSaga } from './ParticipantCompleted';
