import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLeagueApp = (state: any) => state.leagueApp;
const getBase = (state: any) => state.base;

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

export const selectLeagueName = createSelector([getLeagueApp], (leagueApp) =>
    _get(leagueApp, ['league', 'name'], undefined)
);

export const selectIsLeagueOwner = createSelector(
    [getLeagueApp, getBase],
    (leagueApp, base) =>
        _get(leagueApp, ['league', 'owner_uuid'], undefined) ===
        _get(base, ['me', 'user_uuid'], null)
);
