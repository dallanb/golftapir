import { createSelector } from 'reselect';
import { get as _get } from 'lodash';
import { withS3URL } from '@utils';
import constants from '@constants';

const getMemberPage = (state: any) => state.memberPage.data;

export const selectData = createSelector(
    [getMemberPage],
    (memberPage) => memberPage
);

export const selectMember = createSelector([getMemberPage], (memberPage) =>
    _get(memberPage, ['member'], undefined)
);

export const selectMemberAvatarSrc = createSelector(
    [getMemberPage],
    (memberPage) => {
        const filename = _get(
            memberPage,
            ['member', 'avatar', 's3_filename'],
            undefined
        );
        return (
            filename && withS3URL(filename, constants.S3_FOLDERS.MEMBER.AVATAR)
        );
    }
);
