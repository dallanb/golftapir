import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLeaguePage = (state: any) => state.leaguePage.data;

export const selectData = createSelector(
    [getLeaguePage],
    (leaguePage) => leaguePage
);
