import { createSelector } from 'reselect';

const getCompetitorPageContentCompetitorResults = (state: any) =>
    state.competitorPage.ui.content.competitorResults;

export const selectData = createSelector(
    [getCompetitorPageContentCompetitorResults],
    (competitorPageContentCompetitorResults) =>
        competitorPageContentCompetitorResults
);
