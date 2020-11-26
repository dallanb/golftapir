import { createSelector } from 'reselect';

const getCompetitorPageContentCompetitorResults = (state: any) =>
    state.competitorPage.ui.contest.competitorResults;

export const selectData = createSelector(
    [getCompetitorPageContentCompetitorResults],
    (competitorPageContentCompetitorResults) =>
        competitorPageContentCompetitorResults
);
