export { default } from './Competitor';
import { combineReducers } from 'redux';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as headerReducer } from './CompetitorHeader';
import { competitorResultsReducer as contentCompetitorResultsReducer } from './CompetitorContent';
import { headerReducer as siderHeaderReducer } from './CompetitorSider';
export const reducer = combineReducers({
    ui: combineReducers({
        header: headerReducer,
        content: combineReducers({
            competitorResults: contentCompetitorResultsReducer,
        }),
        sider: combineReducers({
            header: siderHeaderReducer,
        }),
    }),
    data: dataReducer,
});

// Saga
export { default as CompetitorPageSaga } from './saga';
export { CompetitorPageHeaderSaga } from './CompetitorHeader';
export { CompetitorPageContentCompetitorResultsSaga } from './CompetitorContent';
export { CompetitorPageSiderHeaderSaga } from './CompetitorSider';

// Routes
export { default as CompetitorPageRoutes } from './routes';
