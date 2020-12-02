import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getNotificationsPageContentNotifications = (state: any) =>
    state.notificationsPage.ui.content.notifications;

export const selectData = createSelector(
    [getNotificationsPageContentNotifications],
    (notificationsPageContentNotificationsResults) =>
        notificationsPageContentNotificationsResults
);

export const selectListData = createSelector(
    [getNotificationsPageContentNotifications],
    (notificationsPageContentNotificationsResults) =>
        _get(notificationsPageContentNotificationsResults, ['data'], [])
);

export const selectListMetadata = createSelector(
    [getNotificationsPageContentNotifications],
    (notificationsPageContentNotificationsResults) =>
        _get(notificationsPageContentNotificationsResults, ['metadata'], [])
);

export const selectListIsFetching = createSelector(
    [getNotificationsPageContentNotifications],
    (notificationsPageContentNotificationsResults) =>
        _get(
            notificationsPageContentNotificationsResults,
            ['isFetching'],
            false
        )
);
