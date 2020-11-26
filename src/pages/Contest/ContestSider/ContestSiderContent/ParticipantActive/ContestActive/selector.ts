import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestPageSiderContentParticipantActiveContestActive = (state: any) =>
    state.competitorPage.ui.sider.content.participantActive.contestActive;

export const selectData = createSelector(
    [getContestPageSiderContentParticipantActiveContestActive],
    (contestPageSiderContentParticipantActiveContestActive) =>
        contestPageSiderContentParticipantActiveContestActive
);

export const selectSheet = createSelector(
    [getContestPageSiderContentParticipantActiveContestActive],
    (contestPageSiderContentParticipantActiveContestActive) =>
        _get(
            contestPageSiderContentParticipantActiveContestActive,
            ['sheet'],
            undefined
        )
);
