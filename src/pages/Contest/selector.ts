import { createSelector } from 'reselect';
import {get as _get} from 'lodash';

const getContestPage = (state: any) => state.contestPage;

export const selectData = createSelector([getContestPage], (contestPage) =>
    _get(contestPage, ['data'], false)
);

export const selectContestParticipants = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['contestParticipants'], [])
);
