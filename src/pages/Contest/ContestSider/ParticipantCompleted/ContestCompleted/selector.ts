import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestPageSiderParticipantCompletedContestCompleted = (state: any) =>
    state.contestPage.ui.sider.participantCompleted.contestCompleted;

export const selectData = createSelector(
    [getContestPageSiderParticipantCompletedContestCompleted],
    (contestPageSiderParticipantCompletedContestCompleted) =>
        contestPageSiderParticipantCompletedContestCompleted
);
