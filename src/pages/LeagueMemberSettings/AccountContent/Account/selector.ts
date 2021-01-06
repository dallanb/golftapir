import { createSelector } from 'reselect';

const getLeagueMemberSettingsPageContentLeagueMemberSettings = (state: any) =>
    state.accountPage.ui.content.account;

export const selectData = createSelector(
    [getLeagueMemberSettingsPageContentLeagueMemberSettings],
    (accountPageContentLeagueMemberSettings) =>
        accountPageContentLeagueMemberSettings
);
