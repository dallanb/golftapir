import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getCompetitorsPage = (state: any) => state.competitorsPage.data;

export const selectData = createSelector(
    [getCompetitorsPage],
    (competitorsPage) => competitorsPage
);
