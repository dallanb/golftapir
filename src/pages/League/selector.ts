import { createSelector } from 'reselect';

const getLeaguePage = (state: any) => state.leaguePage.data;

export const selectData = createSelector(
    [getLeaguePage],
    (homePage) => homePage
);
