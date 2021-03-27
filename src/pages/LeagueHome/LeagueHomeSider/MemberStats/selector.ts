import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLeagueHomePageSiderMemberStats = (state: any) =>
    state.leagueHomePage.ui.sider.memberStats;

export const selectData = createSelector(
    [getLeagueHomePageSiderMemberStats],
    (leagueHomePageSiderMemberStats) => leagueHomePageSiderMemberStats
);

export const selectStat = createSelector(
    [getLeagueHomePageSiderMemberStats],
    (leagueHomePageSiderMemberStats) =>
        _get(leagueHomePageSiderMemberStats, ['stat'], undefined)
);
