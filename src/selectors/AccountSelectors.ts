import { createSelector } from 'reselect';
import _ from 'lodash';

const getAccount = (state: any) => state.account;

export const selectData = createSelector([getAccount], (account) =>
    _.get(account, ['data'], false)
);
