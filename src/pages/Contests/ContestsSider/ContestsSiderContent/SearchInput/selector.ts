import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestsSiderContentSearchPage = (state: any) =>
    state.contestsPage.ui.sider.content.search;

export const selectData = createSelector(
    [getContestsSiderContentSearchPage],
    (contestsSiderContentSearchPage) => contestsSiderContentSearchPage
);

export const selectKey = createSelector(
    [getContestsSiderContentSearchPage],
    (contestsSiderContentSearchPage) =>
        _get(contestsSiderContentSearchPage, ['key'], undefined)
);

export const selectIsSearching = createSelector(
    [getContestsSiderContentSearchPage],
    (contestsSiderContentSearchPage) =>
        _get(contestsSiderContentSearchPage, ['isSearching'], undefined)
);
