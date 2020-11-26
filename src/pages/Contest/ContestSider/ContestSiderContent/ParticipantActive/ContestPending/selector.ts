import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestPageSiderContentParticipantActiveContestPending = (
    state: any
) => state.competitorPage.ui.sider.content.participantActive.contestActive;

export const selectData = createSelector(
    [getContestPageSiderContentParticipantActiveContestPending],
    (contestPageSiderContentParticipantActiveContestPending) =>
        contestPageSiderContentParticipantActiveContestPending
);

export const selectAccountsHash = createSelector(
    [getContestPageSiderContentParticipantActiveContestPending],
    (contestPageSiderContentParticipantActiveContestPending) =>
        _get(
            contestPageSiderContentParticipantActiveContestPending,
            ['accountsHash'],
            {}
        )
);
