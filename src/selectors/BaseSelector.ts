import { createSelector } from 'reselect';
import { get as _get } from 'lodash';
import { withS3URL } from '@utils';
import constants from '@constants';

const getBase = (state: any) => state.base;

export const selectData = createSelector([getBase], (base) => base);

export const selectMe = createSelector([getBase], (base) =>
    _get(base, ['me'], undefined)
);

export const selectMyUUID = createSelector([getBase], (base) =>
    _get(base, ['me', 'uuid'], undefined)
);

export const selectMyDisplayName = createSelector([getBase], (base) =>
    _get(base, ['me', 'display_name'], '')
);
export const selectMyUsername = createSelector([getBase], (base) =>
    _get(base, ['me', 'username'], '')
);

export const selectMyAvatar = createSelector([getBase], (base) =>
    _get(base, ['me', 'avatar'], undefined)
);
export const selectMyAvatarSrc = createSelector([getBase], (base) => {
    const filename = _get(base, ['me', 'avatar', 's3_filename'], undefined);
    return filename && withS3URL(filename, constants.S3_FOLDERS.MEMBER.AVATAR);
});

export const selectMyLeagueUUID = createSelector([getBase], (base) =>
    _get(base, ['me', 'league_uuid'], undefined)
);

export const selectMyStatus = createSelector([getBase], (base) =>
    _get(base, ['me', 'status'], undefined)
);
export const selectMyStat = createSelector([getBase], (base) =>
    _get(base, ['me', 'stat'], undefined)
);

export const selectLeagues = createSelector([getBase], (base) =>
    _get(base, ['leagues'], undefined)
);

export const selectPending = createSelector([getBase], (base) =>
    _get(base, ['pending'], 0)
);

export const selectExpiry = createSelector([getBase], (base) =>
    _get(base, ['expiry'], 0)
);
