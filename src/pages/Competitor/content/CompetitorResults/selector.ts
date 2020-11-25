import { createSelector } from 'reselect';

const getCompetitorPageContentCompetitorResults = (state: any) =>
    state.competitorPage.ui.sider.header;

export const selectData = createSelector(
    [getCompetitorPageContentCompetitorResults],
    (competitorPageContentCompetitorResults) =>
        competitorPageContentCompetitorResults
);
