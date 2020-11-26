import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestPage = (state: any) => state.contestPage;
const getBase = (state: any) => state.base;

export const selectData = createSelector(
    [getContestPage],
    (contestPage) => contestPage
);

export const selectAccountsHash = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['accountsHash'], {})
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

export const selectContestMaterializedParticipants = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['contest', 'participants'], undefined)
);

export const selectContestParticipants = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['participants'], undefined)
);

export const selectIsOwner = createSelector(
    [getContestPage, getBase],
    (contestPage, base) =>
        _get(contestPage, ['contest', 'owner'], undefined) ===
        _get(base, ['me', 'membership_uuid'], undefined)
);

export const selectIsFetching = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['isFetching'], true)
);

export const selectSubscribed = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['subscribed'], false)
);

export const selectSheet = createSelector([getContestPage], (contestPage) =>
    _get(contestPage, ['sheet'], undefined)
);

export const selectMyParticipant = createSelector(
    [getContestPage, getBase],
    (contestPage, base) => {
        const participants = _get(contestPage, ['participants'], []);
        const uuid = _get(base, ['me', 'membership_uuid'], undefined);
        return participants.find(
            ({ user_uuid }: { user_uuid: string }) => uuid === user_uuid
        );
    }
);
