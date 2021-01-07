import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestPageSiderContentParticipantCompletedContestCompleted = (
    state: any
) => state.contestPage.ui.sider.content.participantCompleted.contestCompleted;

export const selectData = createSelector(
    [getContestPageSiderContentParticipantCompletedContestCompleted],
    (contestPageSiderContentParticipantCompletedContestCompleted) =>
        contestPageSiderContentParticipantCompletedContestCompleted
);
