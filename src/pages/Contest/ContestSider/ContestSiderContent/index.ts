import { combineReducers } from 'redux';

// Component
export { default } from './ContestSiderContent';

// Reducer
import { reducer as participantActiveReducer } from './ParticipantActive';
export const reducer = combineReducers({
    participantActive: participantActiveReducer,
});

// Saga
export {
    ContestPageSiderContentParticipantActiveContestActiveSaga,
    ContestPageSiderContentParticipantActiveContestPendingSaga,
} from './ParticipantActive';
