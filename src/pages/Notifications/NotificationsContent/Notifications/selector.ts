import { createSelector } from 'reselect';

const getNotificationsPageContentNotifications = (state: any) =>
    state.notificationsPage.ui.content.notifications;

export const selectData = createSelector(
    [getNotificationsPageContentNotifications],
    (notificationsPageContentNotificationsResults) =>
        notificationsPageContentNotificationsResults
);
