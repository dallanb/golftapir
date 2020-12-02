import { get as _get } from 'lodash';
import { createSelector } from 'reselect';

const getContestUpdatePageContentContest = (state: any) =>
    state.contestUpdatePage.ui.content.contest;

export const selectData = createSelector(
    [getContestUpdatePageContentContest],
    (contestUpdatePageContentContest) => contestUpdatePageContentContest
);

export const selectUUID = createSelector(
    [getContestUpdatePageContentContest],
    (contestUpdatePageContentContest) =>
        _get(contestUpdatePageContentContest, ['uuid'], undefined)
);
