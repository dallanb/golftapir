import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLoginPage = (state: any) => state.loginPage;

export const selectData = createSelector(
    [getLoginPage],
    (loginPage) => loginPage
);

export const selectFormInitialValues = createSelector(
    [getLoginPage],
    (loginPage) => _get(loginPage, ['formInitialValues'], undefined)
);
