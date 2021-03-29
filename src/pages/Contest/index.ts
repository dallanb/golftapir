import { combineReducers } from 'redux';

// Component
export { default } from './Contest';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './ContestContent';
import { reducer as siderReducer } from './ContestSider';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
        sider: siderReducer,
    }),
    data: dataReducer,
});
// Saga
export { default as ContestPageSaga } from './saga';
export {
    ContestPageContentContestLeaderboardSaga,
    ContestLeaderboardScoreChannel,
    ContestPageContentContestLeaderboardScorecardSaga,
} from './ContestContent';
export {
    ContestPageSiderCourseSaga,
    ContestPageSiderParticipantActiveContestActiveSaga,
    ContestPageSiderParticipantActiveContestPendingSaga,
    ContestStrokeUpdateChannel,
    ContestPageSiderParticipantCompletedContestCompletedSaga,
} from './ContestSider';

// Routes
export { default as ContestPageRoutes } from './routes';
