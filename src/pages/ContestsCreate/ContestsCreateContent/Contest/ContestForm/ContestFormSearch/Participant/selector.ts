import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestsCreatePageContentContestSearchParticipant = (state: any) =>
    state.contestsCreatePage.ui.content.contest.form.search.participant;

export const selectData = createSelector(
    [getContestsCreatePageContentContestSearchParticipant],
    (contestsCreatePageContentContestSearchParticipant) =>
        contestsCreatePageContentContestSearchParticipant
);

export const selectSearchData = createSelector(
    [getContestsCreatePageContentContestSearchParticipant],
    (contestsCreatePageContentContestSearchParticipant) =>
        _get(
            contestsCreatePageContentContestSearchParticipant,
            ['data'],
            undefined
        )
);
