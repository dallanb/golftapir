import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLeagueHomePageSiderContentMemberStats = (state: any) =>
    state.leagueHomePage.ui.sider.content.memberStats;

export const selectData = createSelector(
    [getLeagueHomePageSiderContentMemberStats],
    (leagueHomePageSiderContentMemberStats) =>
        leagueHomePageSiderContentMemberStats
);

export const selectStat = createSelector(
    [getLeagueHomePageSiderContentMemberStats],
    (leagueHomePageSiderContentMemberStats) =>
        _get(leagueHomePageSiderContentMemberStats, ['stat'], undefined)
);
