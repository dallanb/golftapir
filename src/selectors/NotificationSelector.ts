import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getNotification = (state: any) => state.notification;

export const selectData = createSelector([getNotification], (notification) =>
    _get(notification, ['data'], false)
);
