import { createSelector } from 'reselect';
import {get as _get} from 'lodash';

const getAccount = (state: any) => state.account;

export const selectData = createSelector([getAccount], (account) =>
    _get(account, ['data'], false)
);
