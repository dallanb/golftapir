import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        setToken: ['uuid', 'token'],
        setTokenSuccess: null,
        setTokenFailure: ['err'],
        fetchNotifications: ['options', 'append'],
        fetchNotificationsSuccess: ['data', 'metadata'],
        fetchNotificationsFailure: ['err'],
        updateNotification: ['id', 'values'],
        updateNotificationSuccess: ['data'],
        updateNotificationFailure: ['err'],
    },
    {
        prefix: 'NOTIFICATION_',
    }
);
export const NotificationTypes = Types;
export default Creators;
