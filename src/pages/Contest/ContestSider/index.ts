import { combineReducers } from 'redux';

// Component
export { default } from './ContestSider';

// Reducer
import { reducer as contentReducer } from './ContestSiderContent';
export const reducer = combineReducers({
    content: contentReducer,
});

// Saga
export {
    ContestPageSiderContentParticipantActiveContestActiveSaga,
    ContestPageSiderContentParticipantActiveContestPendingSaga,
} from './ContestSiderContent';
