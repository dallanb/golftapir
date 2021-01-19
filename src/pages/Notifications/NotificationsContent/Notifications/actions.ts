import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: null,
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        fetchData: ['options', 'append'],
        fetchDataSuccess: ['data', 'metadata'],
        fetchDataFailure: ['err'],
        markNotificationAsRead: ['_id'],
        markNotificationAsReadSuccess: ['_id', 'item'],
        markNotificationAsReadFailure: ['err'],
        markNotificationAsUnread: ['_id'],
        markNotificationAsUnreadSuccess: ['_id', 'item'],
        markNotificationAsUnreadFailure: ['err'],
        markNotificationAsArchived: ['_id'],
        markNotificationAsArchivedSuccess: ['_id', 'item'],
        markNotificationAsArchivedFailure: ['err'],
    },
    {
        prefix: 'NOTIFICATIONS_PAGE_CONTENT_NOTIFICATIONS_',
    }
);
export const NotificationsPageContentNotificationsTypes = Types;
export default Creators;
