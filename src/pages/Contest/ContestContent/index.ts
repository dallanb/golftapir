import { combineReducers } from 'redux';

// Component
export { default } from './ContestContent';

// Reducer
import { reducer as dataReducer, scorecardReducer } from './ContestLeaderboard';
export const reducer = combineReducers({
    contestLeaderboard: combineReducers({
        data: dataReducer,
        scorecard: scorecardReducer,
    }),
});

// Saga
export {
    ContestPageContentContestLeaderboardSaga,
    ContestLeaderboardScoreChannel,
    ContestPageContentContestLeaderboardScorecardSaga,
} from './ContestLeaderboard';
