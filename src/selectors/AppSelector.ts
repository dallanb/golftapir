import { createSelector } from 'reselect';
import {
    get as _get,
    groupBy as _groupBy,
    isNil as _isNil,
    keyBy as _keyBy,
} from 'lodash';
import { withS3URL } from '@utils';
import constants from '@constants';

const getApp = (state: any) => state.app;
const getBase = (state: any) => state.base;

export const selectData = createSelector([getApp], (app) => app);

export const selectIsInitialized = createSelector([getApp], (app) =>
    _get(app, ['isInitialized'], false)
);

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

export const selectLeagueIsFetching = createSelector(
    [getApp],
    (app) =>
        !_get(app, ['league', 'isInitialized'], false) ||
        _get(app, ['league', 'isRefreshing'], true)
);

export const selectLeagueIsInitialized = createSelector([getApp], (app) =>
    _get(app, ['league', 'isInitialized'], false)
);

export const selectLeagueIsRefreshing = createSelector([getApp], (app) =>
    _get(app, ['league', 'isRefreshing'], true)
);

export const selectLeagueMember = createSelector([getApp], (app) =>
    _get(app, ['leagueMember'], undefined)
);

export const selectLeagueMemberData = createSelector([getApp], (app) =>
    _get(app, ['leagueMember', 'data'], undefined)
);

export const selectLeagueMemberStatus = createSelector([getApp], (app) =>
    _get(app, ['leagueMember', 'data', 'status'], undefined)
);

export const selectLeagueMemberIsFetching = createSelector(
    [getApp],
    (app) =>
        !_get(app, ['leagueMember', 'isInitialized'], false) ||
        _get(app, ['leagueMember', 'isRefreshing'], true)
);

export const selectLeagueMemberIsInitialized = createSelector([getApp], (app) =>
    _get(app, ['leagueMember', 'isInitialized'], false)
);

export const selectLeagueMemberIsRefreshing = createSelector([getApp], (app) =>
    _get(app, ['leagueMember', 'isRefreshing'], true)
);

export const selectLeagueMembers = createSelector([getApp], (app) =>
    _get(app, ['leagueMembers'], undefined)
);

export const selectLeagueMembersData = createSelector([getApp], (app) =>
    _get(app, ['leagueMembers', 'data'], undefined)
);

export const selectLeagueMembersDataByStatus = createSelector(
    [getApp],
    (app) => {
        const members = _get(app, ['leagueMembers', 'data'], []);
        return _groupBy(members, 'status');
    }
);

export const selectLeagueMembersDataHashByMember = createSelector(
    [getApp],
    (app) => {
        const data = _get(app, ['leagueMembers', 'data'], undefined);
        if (_isNil(data)) {
            return undefined;
        }
        return _keyBy(data, 'member');
    }
);

export const selectLeagueMembersIsFetching = createSelector(
    [getApp],
    (app) =>
        !_get(app, ['leagueMembers', 'isInitialized'], false) ||
        _get(app, ['leagueMembers', 'isRefreshing'], true)
);

export const selectLeagueMembersIsInitialized = createSelector(
    [getApp],
    (app) => _get(app, ['leagueMembers', 'isInitialized'], false)
);

export const selectLeagueMembersIsRefreshing = createSelector([getApp], (app) =>
    _get(app, ['leagueMembers', 'isRefreshing'], true)
);
