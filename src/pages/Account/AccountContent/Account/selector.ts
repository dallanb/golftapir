import { createSelector } from 'reselect';

const getAccountPageContentAccount = (state: any) =>
    state.accountPage.ui.content.account;

export const selectData = createSelector(
    [getAccountPageContentAccount],
    (accountPageContentAccount) => accountPageContentAccount
);
