import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLeagueMembersSiderContentSearchPage = (state: any) =>
    state.leagueMembersPage.ui.sider.content.memberActive.search;

export const selectData = createSelector(
    [getLeagueMembersSiderContentSearchPage],
    (leagueMembersSiderContentSearchPage) => leagueMembersSiderContentSearchPage
);

export const selectKey = createSelector(
    [getLeagueMembersSiderContentSearchPage],
    (leagueMembersSiderContentSearchPage) =>
        _get(leagueMembersSiderContentSearchPage, ['key'], undefined)
);

export const selectIsSearching = createSelector(
    [getLeagueMembersSiderContentSearchPage],
    (leagueMembersSiderContentSearchPage) =>
        _get(leagueMembersSiderContentSearchPage, ['isSearching'], undefined)
);

export const selectSearchData = createSelector(
    [getLeagueMembersSiderContentSearchPage],
    (leagueMembersSiderContentSearchPage) =>
        _get(leagueMembersSiderContentSearchPage, ['data'], undefined)
);
