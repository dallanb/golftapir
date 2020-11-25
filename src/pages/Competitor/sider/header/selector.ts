import { createSelector } from 'reselect';

const getCompetitorPageSiderHeader = (state: any) =>
    state.competitorPage.ui.sider.header;

export const selectData = createSelector(
    [getCompetitorPageSiderHeader],
    (competitorPageSiderHeader) => competitorPageSiderHeader
);
