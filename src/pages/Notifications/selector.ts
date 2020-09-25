import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getNotificationsPage = (state: any) => state.notificationsPage;

export const selectData = createSelector(
    [getNotificationsPage],
    (notificationsPage) => _get(notificationsPage, ['data'], false)
);
