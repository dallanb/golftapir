import { combineReducers } from 'redux';

// Component
export { default } from './LeaguesCreate';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './LeaguesCreateContent';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
    }),
    data: dataReducer,
});

// Saga
export { default as LeaguesCreatePageSaga } from './saga';
export {
    LeaguesCreatePageContentLeagueSaga,
    LeaguesCreatePageContentLeagueSearchMemberSaga,
} from './LeaguesCreateContent';

// Routes
export { default as LeaguesCreatePageRoutes } from './routes';
