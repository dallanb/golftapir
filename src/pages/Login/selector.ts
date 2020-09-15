import { createSelector } from 'reselect';
import _ from 'lodash';

const getLoginPage = (state: any) => state.loginPage;

export const selectData = createSelector([getLoginPage], (loginPage) =>
    _.get(loginPage, ['data'], false)
);
