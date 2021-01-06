import { createSelector } from 'reselect';
import { get as _get } from 'lodash';
import { accountPage } from '@pages';

const getLeagueMemberSettingsPage = (state: any) => state.accountPage.data;

export const selectData = createSelector(
    [getLeagueMemberSettingsPage],
    (accountPage) => accountPage
);

export const selectLeagueMemberSettings = createSelector(
    [getLeagueMemberSettingsPage],
    (accountPage) => _get(accountPage, ['account'], undefined)
);
