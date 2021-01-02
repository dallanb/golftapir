import { createSelector } from 'reselect';
import { get as _get } from 'lodash';
import { withS3URL } from '@utils';
import constants from '@constants';

const getCompetitorPage = (state: any) => state.competitorPage.data;
const getBase = (state: any) => state.base;

export const selectData = createSelector(
    [getCompetitorPage],
    (competitorPage) => competitorPage
);

export const selectMember = createSelector(
    [getCompetitorPage],
    (competitorPage) => _get(competitorPage, ['member'], undefined)
);

export const selectMemberDisplayName = createSelector(
    [getCompetitorPage],
    (competitorPage) => _get(competitorPage, ['member', 'display_name'], '')
);

export const selectMemberAvatar = createSelector(
    [getCompetitorPage],
    (competitorPage) => _get(competitorPage, ['member', 'avatar'], undefined)
);

export const selectMemberAvatarSrc = createSelector(
    [getCompetitorPage],
    (competitorPage) => {
        const filename = _get(
            competitorPage,
            ['member', 'avatar', 's3_filename'],
            undefined
        );
        return (
            filename && withS3URL(filename, constants.S3_FOLDERS.MEMBER.AVATAR)
        );
    }
);

export const selectIsMe = createSelector(
    [getCompetitorPage, getBase],
    (competitorPage, base) =>
        _get(competitorPage, ['member', 'uuid'], undefined) ===
        _get(base, ['me', 'member_uuid'], undefined)
);
