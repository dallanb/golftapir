import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLeagueHomePageContentMemberStats = (state: any) =>
    state.leagueHomePage.ui.content.memberStats;

export const selectData = createSelector(
    [getLeagueHomePageContentMemberStats],
    (leagueHomePageContentMemberStats) => leagueHomePageContentMemberStats
);

export const selectStat = createSelector(
    [getLeagueHomePageContentMemberStats],
    (leagueHomePageContentMemberStats) =>
        _get(leagueHomePageContentMemberStats, ['stat'], undefined)
);
