import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLeaguesCreatePage = (state: any) => state.leaguesCreatePage.data;

export const selectData = createSelector(
    [getLeaguesCreatePage],
    (leaguesCreatePage) => leaguesCreatePage
);
