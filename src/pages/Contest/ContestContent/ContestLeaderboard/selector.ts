import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestContentContestLeaderboard = (state: any) =>
    state.contestPage.ui.content.contestLeaderboard;

export const selectRankingLookup = createSelector(
    [getContestContentContestLeaderboard],
    (contestLeaderboard) =>
        _get(contestLeaderboard, ['rankingLookup'], undefined)
);

export const selectSheets = createSelector(
    [getContestContentContestLeaderboard],
    (contestLeaderboard) => _get(contestLeaderboard, ['sheets'], undefined)
);

export const selectIsInitialized = createSelector(
    [getContestContentContestLeaderboard],
    (contestLeaderboard) => _get(contestLeaderboard, ['isInitialized'], false)
);
export const selectIsRefreshing = createSelector(
    [getContestContentContestLeaderboard],
    (contestLeaderboard) => _get(contestLeaderboard, ['isRefreshing'], false)
);
