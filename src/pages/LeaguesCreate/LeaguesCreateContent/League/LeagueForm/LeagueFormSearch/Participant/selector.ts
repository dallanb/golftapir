import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLeaguesCreatePageContentLeagueSearchParticipant = (state: any) =>
    state.leaguesCreatePage.ui.content.league.form.search.participant;

export const selectData = createSelector(
    [getLeaguesCreatePageContentLeagueSearchParticipant],
    (leaguesCreatePageContentLeagueSearchParticipant) =>
        leaguesCreatePageContentLeagueSearchParticipant
);

export const selectSearchData = createSelector(
    [getLeaguesCreatePageContentLeagueSearchParticipant],
    (leaguesCreatePageContentLeagueSearchParticipant) =>
        _get(
            leaguesCreatePageContentLeagueSearchParticipant,
            ['data'],
            undefined
        )
);
