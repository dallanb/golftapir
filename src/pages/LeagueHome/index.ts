import { combineReducers } from 'redux';

// Component
export { default } from './LeagueHome';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './LeagueHomeContent';
import { reducer as siderReducer } from './LeagueHomeSider';
export const reducer = combineReducers({
    data: dataReducer,
    ui: combineReducers({
        content: contentReducer,
        sider: siderReducer,
    }),
});

// Saga
export { default as LeagueHomePageSaga } from './saga';
export { LeagueHomePageContentMemberStandingsSaga } from './LeagueHomeContent';
export {
    LeagueHomePageSiderContentMemberStatsSaga,
    LeagueHomePageSiderContentCalendarSaga,
} from './LeagueHomeSider';

// Routes
export { default as LeagueHomePageRoutes } from './routes';
