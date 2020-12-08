import { combineReducers } from 'redux';

// Component
export { default } from './ContestContent';

// Reducer
import { reducer as contestLeaderboardReducer } from './ContestLeaderboard';
export const reducer = combineReducers({
    contestLeaderboard: contestLeaderboardReducer,
});

// Saga
export {
    ContestPageContentContestLeaderboardSaga,
    ContestLeaderboardScoreChannel,
} from './ContestLeaderboard';
