import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getMembersSiderSearchPage = (state: any) =>
    state.membersPage.ui.sider.memberActive.search;

export const selectData = createSelector(
    [getMembersSiderSearchPage],
    (membersSiderSearchPage) => membersSiderSearchPage
);

export const selectKey = createSelector(
    [getMembersSiderSearchPage],
    (membersSiderSearchPage) => _get(membersSiderSearchPage, ['key'], undefined)
);

export const selectIsSearching = createSelector(
    [getMembersSiderSearchPage],
    (membersSiderSearchPage) =>
        _get(membersSiderSearchPage, ['isSearching'], undefined)
);

export const selectSearchData = createSelector(
    [getMembersSiderSearchPage],
    (membersSiderSearchPage) =>
        _get(membersSiderSearchPage, ['data'], undefined)
);
