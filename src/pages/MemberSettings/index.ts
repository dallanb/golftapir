import { combineReducers } from 'redux';
// Component
export { default } from './MemberSettings';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './MemberSettingsContent';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
    }),
    data: dataReducer,
});

// Saga
export { default as MemberSettingsPageSaga } from './saga';
export { MemberSettingsPageContentMemberSaga } from './MemberSettingsContent';
// Routes
export { default as MemberSettingsPageRoutes } from './routes';
