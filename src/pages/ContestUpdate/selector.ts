import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestUpdatePage = (state: any) => state.contestUpdatePage;

export const selectUpdateFormSearchParticipants = createSelector(
    [getContestUpdatePage],
    (contestUpdatePage) =>
        _get(contestUpdatePage, ['updateFormSearchParticipants'], [])
);

export const selectUpdateFormInitialValues = createSelector(
    [getContestUpdatePage],
    (contestUpdatePage) =>
        _get(contestUpdatePage, ['updateFormInitialValues'], {})
);
