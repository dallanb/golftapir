import { createSelector } from 'reselect';
import { get as _get } from 'lodash';
import { withS3URL } from '@utils';
import constants from '@constants';

const getLeagueApp = (state: any) => state.app;
const getBase = (state: any) => state.base;

export const selectData = createSelector(
    [getLeagueApp],
    (leagueApp) => leagueApp
);

export const selectLeagueUUID = createSelector([getLeagueApp], (leagueApp) =>
    _get(leagueApp, ['uuid'], undefined)
);

export const selectLeague = createSelector([getLeagueApp], (leagueApp) =>
    _get(leagueApp, ['league'], undefined)
);

export const selectLeagueData = createSelector([getLeagueApp], (leagueApp) =>
    _get(leagueApp, ['league', 'data'], undefined)
);

export const selectLeagueName = createSelector([getLeagueApp], (leagueApp) =>
    _get(leagueApp, ['league', 'data', 'name'], undefined)
);

export const selectLeagueAvatar = createSelector([getLeagueApp], (leagueApp) =>
    _get(leagueApp, ['league', 'data', 'avatar'], undefined)
);

export const selectLeagueAvatarSrc = createSelector(
    [getLeagueApp],
    (leagueApp) => {
        const filename = _get(
            leagueApp,
            ['league', 'data', 'avatar', 's3_filename'],
            undefined
        );
        return (
            filename && withS3URL(filename, constants.S3_FOLDERS.LEAGUE.AVATAR)
        );
    }
);

export const selectIsLeagueOwner = createSelector(
    [getLeagueApp, getBase],
    (leagueApp, base) =>
        _get(leagueApp, ['league', 'data', 'owner_uuid'], undefined) ===
        _get(base, ['me', 'user_uuid'], null)
);

export const selectLeagueMember = createSelector([getLeagueApp], (leagueApp) =>
    _get(leagueApp, ['leagueMember'], undefined)
);

export const selectLeagueMemberStatus = createSelector(
    [getLeagueApp],
    (leagueApp) =>
        _get(leagueApp, ['leagueMember', 'data', 'status'], undefined)
);

export const selectIsInitialized = createSelector([getLeagueApp], (leagueApp) =>
    _get(leagueApp, ['isInitialized'], false)
);

export const selectIsLeagueFetching = createSelector(
    [getLeagueApp],
    (leagueApp) => _get(leagueApp, ['league', 'isFetching'], true)
);
