import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getMembersSiderContentSearchPage = (state: any) =>
    state.membersPage.ui.sider.content.memberActive.search;

export const selectData = createSelector(
    [getMembersSiderContentSearchPage],
    (membersSiderContentSearchPage) => membersSiderContentSearchPage
);

export const selectKey = createSelector(
    [getMembersSiderContentSearchPage],
    (membersSiderContentSearchPage) =>
        _get(membersSiderContentSearchPage, ['key'], undefined)
);

export const selectIsSearching = createSelector(
    [getMembersSiderContentSearchPage],
    (membersSiderContentSearchPage) =>
        _get(membersSiderContentSearchPage, ['isSearching'], undefined)
);

export const selectSearchData = createSelector(
    [getMembersSiderContentSearchPage],
    (membersSiderContentSearchPage) =>
        _get(membersSiderContentSearchPage, ['data'], undefined)
);
