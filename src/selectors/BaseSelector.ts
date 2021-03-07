import { createSelector } from 'reselect';
import { get as _get } from 'lodash';
import { withS3URL } from '@utils';
import constants from '@constants';

const getBase = (state: any) => state.base;

export const selectData = createSelector([getBase], (base) => base);

export const selectMe = createSelector([getBase], (base) =>
    _get(base, ['me'], undefined)
);

export const selectMeData = createSelector([getBase], (base) =>
    _get(base, ['me', 'data'], undefined)
);

export const selectMeIsInitialized = createSelector([getBase], (base) =>
    _get(base, ['me', 'isInitialized'], false)
);

export const selectMyUUID = createSelector([getBase], (base) =>
    _get(base, ['me', 'data', 'uuid'], undefined)
);


export const selectMyUserUUID = createSelector([getBase], (base) =>
    _get(base, ['me', 'data', 'user_uuid'], undefined)
);

export const selectMyDisplayName = createSelector([getBase], (base) =>
    _get(base, ['me', 'data', 'display_name'], '')
);
export const selectMyUsername = createSelector([getBase], (base) =>
    _get(base, ['me', 'data', 'username'], '')
);

export const selectMyAvatar = createSelector([getBase], (base) =>
    _get(base, ['me', 'data', 'avatar'], undefined)
);
export const selectMyAvatarSrc = createSelector([getBase], (base) => {
    const filename = _get(
        base,
        ['me', 'data', 'avatar', 's3_filename'],
        undefined
    );
    const timestamp = _get(
        base,
        ['me', 'data', 'avatar', 'timestamp'],
        undefined
    );
    return (
        filename &&
        withS3URL(filename, constants.S3_FOLDERS.MEMBER.AVATAR, timestamp)
    );
});

export const selectMyLeagueUUID = createSelector([getBase], (base) =>
    _get(base, ['me', 'data', 'league_uuid'], undefined)
);

export const selectMyStatus = createSelector([getBase], (base) =>
    _get(base, ['me', 'data', 'status'], undefined)
);

export const selectMyStat = createSelector([getBase], (base) =>
    _get(base, ['me', 'data', 'stat'], undefined)
);

export const selectMyWallet = createSelector([getBase], (base) =>
    _get(base, ['me', 'data', 'wallet'], undefined)
);

export const selectMyWalletBalance = createSelector([getBase], (base) =>
    _get(base, ['me', 'data', 'wallet', 'balance'], undefined)
);

export const selectLeagues = createSelector([getBase], (base) =>
    _get(base, ['leagues', 'data'], undefined)
);

export const selectPending = createSelector([getBase], (base) =>
    _get(base, ['pending'], 0)
);

export const selectExpiry = createSelector([getBase], (base) =>
    _get(base, ['expiry'], 0)
);
