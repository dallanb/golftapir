import { get as _get } from 'lodash';
import { createSelector } from 'reselect';

const getContestsPageContentContests = (state: any) =>
    state.contestsPage.ui.content.contests;

export const selectData = createSelector(
    [getContestsPageContentContests],
    (contestsPageContentContestsResults) => contestsPageContentContestsResults
);

export const selectListData = createSelector(
    [getContestsPageContentContests],
    (contestsPageContentContestsResults) =>
        _get(contestsPageContentContestsResults, ['data'], [])
);

export const selectListMetadata = createSelector(
    [getContestsPageContentContests],
    (contestsPageContentContestsResults) =>
        _get(contestsPageContentContestsResults, ['metadata'], [])
);

export const selectListIsFetching = createSelector(
    [getContestsPageContentContests],
    (contestsPageContentContestsResults) =>
        _get(contestsPageContentContestsResults, ['isFetching'], [])
);
