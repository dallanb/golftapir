import { createSelector } from 'reselect';

const getCompetitorsPageContentCompetitors = (state: any) =>
    state.competitorsPage.ui.content.competitors;

export const selectData = createSelector(
    [getCompetitorsPageContentCompetitors],
    (competitorPageContentCompetitorResults) =>
        competitorPageContentCompetitorResults
);
