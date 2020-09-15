import { createSelector } from 'reselect';
import _ from 'lodash';

const getAccountPage = (state: any) => state.accountPage;

export const selectData = createSelector([getAccountPage], (accountPage) =>
    _.get(accountPage, ['data'], false)
);
