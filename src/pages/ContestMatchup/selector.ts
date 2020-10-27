import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestMatchupPage = (state: any) => state.contestMatchupPage;
const getBase = (state: any) => state.base;

export const selectScore = createSelector(
    [getContestMatchupPage],
    (contestMatchupPage) => _get(contestMatchupPage, ['score'], undefined)
);

export const selectScoreUUID = createSelector(
    [getContestMatchupPage],
    (contestMatchupPage) =>
        _get(contestMatchupPage, ['score', 'uuid'], undefined)
);

export const selectSheet = createSelector(
    [getContestMatchupPage],
    (contestMatchupPage) => _get(contestMatchupPage, ['score', 'sheet'], [])
);

export const selectStatus = createSelector(
    [getContestMatchupPage],
    (contestMatchupPage) =>
        _get(contestMatchupPage, ['score', 'status'], undefined)
);

export const selectMyParticipantSheet = createSelector(
    [getContestMatchupPage, getBase],
    (contestMatchupPage, base) => {
        const sheet = _get(contestMatchupPage, ['score', 'sheet'], []);
        const me = _get(base, ['me', 'membership_uuid'], undefined);
        return sheet.find(
            ({ participant }: { participant: string }) => participant === me
        );
    }
);

export const selectIsOwner = createSelector(
    [getContestMatchupPage, getBase],
    (contestMatchupPage, base) =>
        _get(contestMatchupPage, ['contest', 'owner_uuid'], undefined) ===
        _get(base, ['me', 'membership_uuid'], undefined)
);
