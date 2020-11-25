export { default } from './Competitor';
import { combineReducers } from 'redux';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as headerReducer } from './header';
import { competitorResultsReducer as contentCompetitorResultsReducer } from './content';
import { headerReducer as siderHeaderReducer } from './sider';
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
export { CompetitorPageHeaderSaga } from './header';
export { CompetitorPageContentCompetitorResultsSaga } from './content';
export { CompetitorPageSiderHeaderSaga } from './sider';

// Routes
export { default as CompetitorPageRoutes } from './routes';
