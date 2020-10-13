import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestsUpdatePage = (state: any) => state.contestsUpdatePage;

export const selectUpdateFormSearchParticipants = createSelector(
    [getContestsUpdatePage],
    (contestsUpdatePage) =>
        _get(contestsUpdatePage, ['updateFormSearchParticipants'], [])
);

export const selectUpdateFormInitialValues = createSelector(
    [getContestsUpdatePage],
    (contestsUpdatePage) =>
        _get(contestsUpdatePage, ['updateFormInitialValues'], {})
);
