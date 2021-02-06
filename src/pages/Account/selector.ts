import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getAccountPage = (state: any) => state.accountPage.data;

export const selectData = createSelector(
    [getAccountPage],
    (accountPage) => accountPage
);

export const selectAccount = createSelector([getAccountPage], (accountPage) =>
    _get(accountPage, ['account'], undefined)
);

export const selectIsInitialized = createSelector(
    [getAccountPage],
    (accountPage) => _get(accountPage, ['isInitialized'], false)
);
