import { createSelector } from 'reselect';

const getLeaguesCreatePageContentLeague = (state: any) =>
    state.leaguesCreatePage.ui.content.league.data;

export const selectData = createSelector(
    [getLeaguesCreatePageContentLeague],
    (leaguesCreatePageContentLeague) => leaguesCreatePageContentLeague
);
