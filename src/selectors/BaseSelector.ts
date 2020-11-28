import { createSelector } from 'reselect';
import { get as _get } from 'lodash';
import { withS3URL } from '@utils';
import constants from '@constants';

const getBase = (state: any) => state.base;

export const selectMe = createSelector([getBase], (base) =>
    _get(base, ['me'], [])
);

export const selectMyName = createSelector([getBase], (base) => {
    const first_mame = _get(base, ['me', 'first_name'], '');
    const last_name = _get(base, ['me', 'last_name'], '');
    return `${first_mame} ${last_name}`;
});

export const selectMyAvatarSrc = createSelector([getBase], (base) => {
    const filename = _get(base, ['me', 'avatar'], undefined);
    return filename && withS3URL(filename, constants.S3_FOLDERS.ACCOUNT.AVATAR);
});
