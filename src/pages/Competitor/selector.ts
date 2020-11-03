import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getCompetitorPage = (state: any) => state.competitorPage;
const getBase = (state: any) => state.base;

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

export const selectIsMe = createSelector(
    [getCompetitorPage, getBase],
    (competitorPage, base) =>
        _get(competitorPage, ['account', 'membership_uuid'], undefined) ===
        _get(base, ['me', 'membership_uuid'], undefined)
);

export const selectContestsList = createSelector(
    [getCompetitorPage],
    (competitorPage) => _get(competitorPage, ['contestsList'], undefined)
);
