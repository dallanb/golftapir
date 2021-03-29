import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLeaguesSiderSearchPage = (state: any) =>
    state.leaguesPage.ui.sider.search;

export const selectData = createSelector(
    [getLeaguesSiderSearchPage],
    (leaguesSiderSearchPage) => leaguesSiderSearchPage
);

export const selectKey = createSelector(
    [getLeaguesSiderSearchPage],
    (leaguesSiderSearchPage) => _get(leaguesSiderSearchPage, ['key'], undefined)
);

export const selectIsSearching = createSelector(
    [getLeaguesSiderSearchPage],
    (leaguesSiderSearchPage) =>
        _get(leaguesSiderSearchPage, ['isSearching'], undefined)
);
