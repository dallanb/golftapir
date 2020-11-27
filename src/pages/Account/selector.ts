import { createSelector } from 'reselect';
import { get as _get } from 'lodash';
import { accountPage } from '@pages';

const getAccountPage = (state: any) => state.accountPage.data;

export const selectData = createSelector(
    [getAccountPage],
    (accountPage) => accountPage
);

export const selectAccount = createSelector([getAccountPage], (accountPage) =>
    _get(accountPage, ['account'], undefined)
);
