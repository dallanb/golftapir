import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestUpdatePage = (state: any) => state.contestUpdatePage;

export const selectData = createSelector(
    [getContestUpdatePage],
    (contestUpdatePage) => contestUpdatePage
);

export const selectContest = createSelector(
    [getContestUpdatePage],
    (contestUpdatePage) => _get(contestUpdatePage, ['contest'], undefined)
);

export const selectContestName = createSelector(
    [getContestUpdatePage],
    (contestUpdatePage) =>
        _get(contestUpdatePage, ['contest', 'name'], undefined)
);
