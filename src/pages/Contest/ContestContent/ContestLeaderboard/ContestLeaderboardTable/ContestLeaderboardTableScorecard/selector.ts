import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestContentContestLeaderboardScorecard = (state: any) =>
    state.contestPage.ui.content.contestLeaderboard.scorecard;

export const selectData = createSelector(
    [getContestContentContestLeaderboardScorecard],
    (contestContentContestLeaderboardScorecard) =>
        contestContentContestLeaderboardScorecard
);
