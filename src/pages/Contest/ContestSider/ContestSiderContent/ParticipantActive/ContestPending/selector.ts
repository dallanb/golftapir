import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestPageSiderContentParticipantActiveContestPending = (
    state: any
) => state.contestPage.ui.sider.content.participantActive.contestPending;

export const selectData = createSelector(
    [getContestPageSiderContentParticipantActiveContestPending],
    (contestPageSiderContentParticipantActiveContestPending) =>
        contestPageSiderContentParticipantActiveContestPending
);

export const selectListData = createSelector(
    [getContestPageSiderContentParticipantActiveContestPending],
    (contestPageSiderContentParticipantActiveContestPending) =>
        _get(
            contestPageSiderContentParticipantActiveContestPending,
            ['data'],
            []
        )
);

export const selectListMetadata = createSelector(
    [getContestPageSiderContentParticipantActiveContestPending],
    (contestPageSiderContentParticipantActiveContestPending) =>
        _get(
            contestPageSiderContentParticipantActiveContestPending,
            ['metadata'],
            []
        )
);

export const selectListIsFetching = createSelector(
    [getContestPageSiderContentParticipantActiveContestPending],
    (contestPageSiderContentParticipantActiveContestPending) =>
        _get(
            contestPageSiderContentParticipantActiveContestPending,
            ['isFetching'],
            false
        )
);
