import { combineReducers } from 'redux';

// Component
export { default } from './ParticipantActive';

// Reducer
import { reducer as contestActiveReducer } from './ContestActive';
import { reducer as contestPendingReducer } from './ContestPending';
export const reducer = combineReducers({
    contestActive: contestActiveReducer,
    contestPending: contestPendingReducer,
});

// Saga
export {
    ContestPageSiderContentParticipantActiveContestActiveSaga,
    ContestStrokeUpdateChannel,
} from './ContestActive';
export { ContestPageSiderContentParticipantActiveContestPendingSaga } from './ContestPending';
