import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getCompetitorPageContentCompetitorResults = (state: any) =>
    state.competitorPage.ui.content.competitorResults;

export const selectData = createSelector(
    [getCompetitorPageContentCompetitorResults],
    (competitorPageContentCompetitorResults) =>
        competitorPageContentCompetitorResults
);

export const selectListData = createSelector(
    [getCompetitorPageContentCompetitorResults],
    (competitorPageContentCompetitorResults) =>
        _get(competitorPageContentCompetitorResults, ['data'], [])
);

export const selectListMetadata = createSelector(
    [getCompetitorPageContentCompetitorResults],
    (competitorPageContentCompetitorResults) =>
        _get(competitorPageContentCompetitorResults, ['metadata'], [])
);

export const selectListIsFetching = createSelector(
    [getCompetitorPageContentCompetitorResults],
    (competitorPageContentCompetitorResults) =>
        _get(competitorPageContentCompetitorResults, ['isFetching'], [])
);
