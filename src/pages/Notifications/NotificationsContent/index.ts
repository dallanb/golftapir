import { combineReducers } from 'redux';

// Component
export { default } from './NotificationsContent';

// Reducer
import { reducer as notificationsReducer } from './Notifications';
export const reducer = combineReducers({
    notifications: notificationsReducer,
});

// Saga
export { NotificationsPageContentNotificationsSaga } from './Notifications';
