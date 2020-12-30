import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLeaguesSiderContentSearchPage = (state: any) =>
    state.leaguesPage.ui.sider.content.search;

export const selectData = createSelector(
    [getLeaguesSiderContentSearchPage],
    (leaguesSiderContentSearchPage) => leaguesSiderContentSearchPage
);

export const selectKey = createSelector(
    [getLeaguesSiderContentSearchPage],
    (leaguesSiderContentSearchPage) =>
        _get(leaguesSiderContentSearchPage, ['key'], undefined)
);

export const selectIsSearching = createSelector(
    [getLeaguesSiderContentSearchPage],
    (leaguesSiderContentSearchPage) =>
        _get(leaguesSiderContentSearchPage, ['isSearching'], undefined)
);
