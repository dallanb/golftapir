import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLeagueHomePage = (state: any) => state.leagueHomePage.data;

export const selectData = createSelector(
    [getLeagueHomePage],
    (leagueHomePage) => leagueHomePage
);
