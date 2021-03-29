import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestsSiderSearchPage = (state: any) =>
    state.contestsPage.ui.sider.search;

export const selectData = createSelector(
    [getContestsSiderSearchPage],
    (contestsSiderSearchPage) => contestsSiderSearchPage
);

export const selectKey = createSelector(
    [getContestsSiderSearchPage],
    (contestsSiderSearchPage) =>
        _get(contestsSiderSearchPage, ['key'], undefined)
);

export const selectIsSearching = createSelector(
    [getContestsSiderSearchPage],
    (contestsSiderSearchPage) =>
        _get(contestsSiderSearchPage, ['isSearching'], undefined)
);
