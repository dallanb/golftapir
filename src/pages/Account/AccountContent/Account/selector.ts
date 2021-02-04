import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getAccountPageContentAccount = (state: any) =>
    state.accountPage.ui.content.account;

export const selectData = createSelector(
    [getAccountPageContentAccount],
    (accountPageContentAccount) => accountPageContentAccount
);

export const selectIsInitialized = createSelector(
    [getAccountPageContentAccount],
    (accountPageContentAccount) =>
        _get(accountPageContentAccount, ['isInitialized'], false)
);

export const selectIsSubmitting = createSelector(
    [getAccountPageContentAccount],
    (accountPageContentAccount) =>
        _get(accountPageContentAccount, ['isSubmitting'], false)
);
