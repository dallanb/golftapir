import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestMatchupPage = (state: any) => state.contestMatchupPage;

export const selectScore = createSelector(
    [getContestMatchupPage],
    (contestMatchupPage) => _get(contestMatchupPage, ['score'], undefined)
);

export const selectSheet = createSelector(
    [getContestMatchupPage],
    (contestMatchupPage) =>
        _get(contestMatchupPage, ['score', 'log', 'sheet'], [])
);
