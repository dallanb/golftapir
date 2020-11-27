import { combineReducers } from 'redux';

// Component
export { default } from './Notifications';

// Reducer
import { reducer as dataReducer } from './reducer';
import { reducer as contentReducer } from './NotificationsContent';
export const reducer = combineReducers({
    ui: combineReducers({
        content: contentReducer,
    }),
    data: dataReducer,
});

// Saga
export { default as NotificationsPageSaga } from './saga';
export { NotificationsPageContentNotificationsSaga } from './NotificationsContent';

// Routes
export { default as NotificationsPageRoutes } from './routes';
