import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestPageSiderParticipantActiveContestPending = (state: any) =>
    state.contestPage.ui.sider.participantActive.contestPending;

export const selectData = createSelector(
    [getContestPageSiderParticipantActiveContestPending],
    (contestPageSiderParticipantActiveContestPending) =>
        contestPageSiderParticipantActiveContestPending
);

export const selectListData = createSelector(
    [getContestPageSiderParticipantActiveContestPending],
    (contestPageSiderParticipantActiveContestPending) =>
        _get(contestPageSiderParticipantActiveContestPending, ['data'], [])
);

export const selectListMetadata = createSelector(
    [getContestPageSiderParticipantActiveContestPending],
    (contestPageSiderParticipantActiveContestPending) =>
        _get(contestPageSiderParticipantActiveContestPending, ['metadata'], [])
);

export const selectListIsFetching = createSelector(
    [getContestPageSiderParticipantActiveContestPending],
    (contestPageSiderParticipantActiveContestPending) =>
        _get(
            contestPageSiderParticipantActiveContestPending,
            ['isFetching'],
            false
        )
);
