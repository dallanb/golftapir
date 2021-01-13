import { createSelector } from 'reselect';
import { get as _get } from 'lodash';
import { withS3URL } from '@utils';
import constants from '@constants';

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

export const selectLeagueAvatar = createSelector([getLeagueApp], (leagueApp) =>
    _get(leagueApp, ['league', 'avatar'], undefined)
);

export const selectLeagueAvatarSrc = createSelector(
    [getLeagueApp],
    (leagueApp) => {
        const filename = _get(
            leagueApp,
            ['league', 'avatar', 's3_filename'],
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
        _get(leagueApp, ['league', 'owner_uuid'], undefined) ===
        _get(base, ['me', 'user_uuid'], null)
);
