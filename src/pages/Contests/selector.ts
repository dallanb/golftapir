import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestsPage = (state: any) => state.contestsPage.data;

export const selectData = createSelector(
    [getContestsPage],
    (contestsPage) => contestsPage
);
