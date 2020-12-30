import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLeaguesPage = (state: any) => state.leaguesPage.data;

export const selectData = createSelector(
    [getLeaguesPage],
    (leaguesPage) => leaguesPage
);
