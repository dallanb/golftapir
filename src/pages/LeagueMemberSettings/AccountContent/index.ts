import { combineReducers } from 'redux';

// Component
export { default } from './LeagueMemberSettingsContent';

// Reducer
import { reducer as accountReducer } from './LeagueMemberSettings';
export const reducer = combineReducers({
    account: accountReducer,
});

// Saga
export { LeagueMemberSettingsPageContentLeagueMemberSettingsSaga } from './LeagueMemberSettings';
