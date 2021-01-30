import { createSelector } from 'reselect';
import { get as _get } from 'lodash';
import { withS3URL } from '@utils';
import constants from '@constants';

const getApp = (state: any) => state.app;
const getBase = (state: any) => state.base;

export const selectData = createSelector([getApp], (app) => app);

export const selectLeagueUUID = createSelector([getApp], (app) =>
    _get(app, ['uuid'], undefined)
);

export const selectLeague = createSelector([getApp], (app) =>
    _get(app, ['league'], undefined)
);

export const selectLeagueData = createSelector([getApp], (app) =>
    _get(app, ['league', 'data'], undefined)
);

export const selectLeagueName = createSelector([getApp], (app) =>
    _get(app, ['league', 'data', 'name'], undefined)
);

export const selectLeagueAvatar = createSelector([getApp], (app) =>
    _get(app, ['league', 'data', 'avatar'], undefined)
);

export const selectLeagueAvatarSrc = createSelector([getApp], (app) => {
    const filename = _get(
        app,
        ['league', 'data', 'avatar', 's3_filename'],
        undefined
    );
    return filename && withS3URL(filename, constants.S3_FOLDERS.LEAGUE.AVATAR);
});

export const selectIsLeagueOwner = createSelector(
    [getApp, getBase],
    (app, base) =>
        _get(app, ['league', 'data', 'owner_uuid'], undefined) ===
        _get(base, ['me', 'data', 'user_uuid'], null)
);

export const selectLeagueMember = createSelector([getApp], (app) =>
    _get(app, ['leagueMember'], undefined)
);

export const selectLeagueMemberStatus = createSelector([getApp], (app) =>
    _get(app, ['leagueMember', 'data', 'status'], undefined)
);

export const selectIsInitialized = createSelector([getApp], (app) =>
    _get(app, ['isInitialized'], false)
);

export const selectIsLeagueFetching = createSelector([getApp], (app) =>
    _get(app, ['league', 'isFetching'], true)
);
