import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLogoutPage = (state: any) => state.logoutPage;

export const selectData = createSelector(
    [getLogoutPage],
    (logoutPage) => logoutPage
);
