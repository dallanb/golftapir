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

export const selectAccount = createSelector(
    [getCompetitorPage],
    (competitorPage) => _get(competitorPage, ['account'], undefined)
);

export const selectAccountName = createSelector(
    [getCompetitorPage],
    (competitorPage) => {
        const first_mame = _get(competitorPage, ['account', 'first_name'], '');
        const last_name = _get(competitorPage, ['account', 'last_name'], '');
        return `${first_mame} ${last_name}`;
    }
);

export const selectAccountAvatar = createSelector(
    [getCompetitorPage],
    (competitorPage) => _get(competitorPage, ['account', 'avatar'], undefined)
);

export const selectAccountAvatarSrc = createSelector(
    [getCompetitorPage],
    (competitorPage) => {
        const filename = _get(competitorPage, ['account', 'avatar'], undefined);
        return (
            filename && withS3URL(filename, constants.S3_FOLDERS.ACCOUNT.AVATAR)
        );
    }
);

export const selectIsMe = createSelector(
    [getCompetitorPage, getBase],
    (competitorPage, base) =>
        _get(competitorPage, ['account', 'membership_uuid'], undefined) ===
        _get(base, ['me', 'membership_uuid'], undefined)
);
