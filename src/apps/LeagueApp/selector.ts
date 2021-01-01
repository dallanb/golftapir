import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLeagueApp = (state: any) => state.leagueApp;

export const selectData = createSelector(
    [getLeagueApp],
    (leagueApp) => leagueApp
);

export const selectLeague = createSelector([getLeagueApp], (leagueApp) =>
    _get(leagueApp, ['league'], undefined)
);

export const selectLeagueUUID = createSelector([getLeagueApp], (leagueApp) =>
    _get(leagueApp, ['league', 'uuid'], null)
);
