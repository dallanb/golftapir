import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestPage = (state: any) => state.contestPage;
const getBase = (state: any) => state.base;

export const selectData = createSelector([getContestPage], (contestPage) =>
    _get(contestPage, ['data'], false)
);

export const selectAccountsHash = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['accountsHash'], undefined)
);

export const selectContest = createSelector([getContestPage], (contestPage) =>
    _get(contestPage, ['contest'], {})
);

export const selectContestStartTime = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['contest', 'start_time'], undefined)
);

export const selectContestStatus = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['contest', 'status'], undefined)
);

export const selectContestParticipants = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['contest', 'participants'], [])
);

export const selectIsOwner = createSelector(
    [getContestPage, getBase],
    (contestPage, base) =>
        _get(contestPage, ['contest', 'owner_uuid'], undefined) ===
        _get(base, ['me', 'membership_uuid'], undefined)
);
