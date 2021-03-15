import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestUpdatePage = (state: any) => state.contestUpdatePage.data;

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
export const selectContestUUID = createSelector(
    [getContestUpdatePage],
    (contestUpdatePage) =>
        _get(contestUpdatePage, ['contest', 'uuid'], undefined)
);

export const selectIsInitialized = createSelector(
    [getContestUpdatePage],
    (contestUpdatePage) => _get(contestUpdatePage, ['isInitialized'], false)
);
