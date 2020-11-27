import { createSelector } from 'reselect';

const getContestsPageContentContests = (state: any) =>
    state.contestsPage.ui.content.contests;

export const selectData = createSelector(
    [getContestsPageContentContests],
    (contestsPageContentContestsResults) => contestsPageContentContestsResults
);
