import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestsPage = (state: any) => state.contestsPage;

export const selectData = createSelector(
    [getContestsPage],
    (contestsPage) => contestsPage
);

export const selectContestsList = createSelector(
    [getContestsPage],
    (contestsPage) => _get(contestsPage, ['contestsList'], undefined)
);
