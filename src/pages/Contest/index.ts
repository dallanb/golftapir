import { combineReducers } from 'redux';

// Component
export { default } from './Contest';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as siderReducer } from './ContestSider';
export const reducer = combineReducers({
    ui: combineReducers({
        sider: siderReducer,
    }),
    data: dataReducer,
});
// Saga
export { default as ContestPageSaga } from './saga';
export {
    ContestPageSiderContentParticipantActiveContestActiveSaga,
    ContestPageSiderContentParticipantActiveContestPendingSaga,
} from './ContestSider';

// Routes
export { default as ContestPageRoutes } from './routes';
