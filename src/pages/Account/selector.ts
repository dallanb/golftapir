import { createSelector } from 'reselect';
import {get as _get} from 'lodash';

const getAccountPage = (state: any) => state.accountPage;

export const selectData = createSelector([getAccountPage], (accountPage) =>
    _get(accountPage, ['data'], false)
);
