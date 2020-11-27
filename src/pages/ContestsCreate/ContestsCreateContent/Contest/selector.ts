import { createSelector } from 'reselect';

const getContestsCreatePageContentContest = (state: any) =>
    state.contestsCreatePage.ui.content.contest;

export const selectData = createSelector(
    [getContestsCreatePageContentContest],
    (contestsCreatePageContentContest) => contestsCreatePageContentContest
);
