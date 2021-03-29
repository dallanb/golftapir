import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestPageSiderParticipantActiveContestActive = (state: any) =>
    state.contestPage.ui.sider.participantActive.contestActive;

export const selectData = createSelector(
    [getContestPageSiderParticipantActiveContestActive],
    (contestPageSiderParticipantActiveContestActive) =>
        contestPageSiderParticipantActiveContestActive
);

export const selectSheet = createSelector(
    [getContestPageSiderParticipantActiveContestActive],
    (contestPageSiderParticipantActiveContestActive) =>
        _get(
            contestPageSiderParticipantActiveContestActive,
            ['sheet'],
            undefined
        )
);
