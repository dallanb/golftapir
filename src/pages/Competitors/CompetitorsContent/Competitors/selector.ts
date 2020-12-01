import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getCompetitorsPageContentCompetitors = (state: any) =>
    state.competitorsPage.ui.content.competitors;

export const selectData = createSelector(
    [getCompetitorsPageContentCompetitors],
    (competitorsPageContentCompetitors) => competitorsPageContentCompetitors
);

export const selectListData = createSelector(
    [getCompetitorsPageContentCompetitors],
    (competitorsPageContentCompetitors) =>
        _get(competitorsPageContentCompetitors, ['data'], [])
);

export const selectListMetadata = createSelector(
    [getCompetitorsPageContentCompetitors],
    (competitorsPageContentCompetitors) =>
        _get(competitorsPageContentCompetitors, ['metadata'], [])
);

export const selectListIsFetching = createSelector(
    [getCompetitorsPageContentCompetitors],
    (competitorsPageContentCompetitors) =>
        _get(competitorsPageContentCompetitors, ['isFetching'], [])
);
