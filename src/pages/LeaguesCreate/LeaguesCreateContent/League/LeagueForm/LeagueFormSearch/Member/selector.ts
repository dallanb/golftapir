import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLeaguesCreatePageContentLeagueSearchMember = (state: any) =>
    state.leaguesCreatePage.ui.content.league.form.search.member;

export const selectData = createSelector(
    [getLeaguesCreatePageContentLeagueSearchMember],
    (leaguesCreatePageContentLeagueSearchMember) =>
        leaguesCreatePageContentLeagueSearchMember
);

export const selectSearchData = createSelector(
    [getLeaguesCreatePageContentLeagueSearchMember],
    (leaguesCreatePageContentLeagueSearchMember) =>
        _get(leaguesCreatePageContentLeagueSearchMember, ['data'], undefined)
);
