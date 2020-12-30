import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLeaguePage = (state: any) => state.leaguePage.data;

export const selectData = createSelector(
    [getLeaguePage],
    (leaguePage) => leaguePage
);

export const selectLeague = createSelector([getLeaguePage], (leaguePage) =>
    _get(leaguePage, ['league'], undefined)
);

export const selectLeagueName = createSelector([getLeaguePage], (leaguePage) =>
    _get(leaguePage, ['league', 'name'], undefined)
);
export const selectLeagueUUID = createSelector([getLeaguePage], (leaguePage) =>
    _get(leaguePage, ['league', 'uuid'], undefined)
);
