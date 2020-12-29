import { createSelector } from 'reselect';
import { get as _get } from 'lodash';
import { withS3URL } from '@utils';
import constants from '@constants';

const getBase = (state: any) => state.base;

export const selectData = createSelector([getBase], (base) => base);

export const selectMe = createSelector([getBase], (base) =>
    _get(base, ['me'], [])
);

export const selectMyDisplayName = createSelector([getBase], (base) =>
    _get(base, ['me', 'display_name'], '')
);
export const selectMyUsername = createSelector([getBase], (base) =>
    _get(base, ['me', 'username'], '')
);

export const selectMyAvatarSrc = createSelector([getBase], (base) => {
    const filename = _get(base, ['me', 'avatar', 's3_filename'], undefined);
    return filename && withS3URL(filename, constants.S3_FOLDERS.ACCOUNT.AVATAR);
});
