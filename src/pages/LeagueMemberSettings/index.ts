import { combineReducers } from 'redux';
// Component
export { default } from './LeagueMemberSettings';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './LeagueMemberSettingsContent';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
    }),
    data: dataReducer,
});

// Saga
export { default as LeagueMemberSettingsPageSaga } from './saga';
export { LeagueMemberSettingsPageContentLeagueMemberSettingsSaga } from './LeagueMemberSettingsContent';
// Routes
export { default as LeagueMemberSettingsPageRoutes } from './routes';
