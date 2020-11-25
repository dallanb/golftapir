import { createSelector } from 'reselect';

const getCompetitorPageHeader = (state: any) => state.competitorPage.ui.header;

export const selectData = createSelector(
    [getCompetitorPageHeader],
    (competitorPageHeader) => competitorPageHeader
);
