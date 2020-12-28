import { get as _get } from 'lodash';
import { createSelector } from 'reselect';

const getLeaguesPageContentLeagues = (state: any) =>
    state.leaguesPage.ui.content.leagues;

export const selectData = createSelector(
    [getLeaguesPageContentLeagues],
    (leaguesPageContentLeaguesResults) => leaguesPageContentLeaguesResults
);

export const selectListData = createSelector(
    [getLeaguesPageContentLeagues],
    (leaguesPageContentLeaguesResults) =>
        _get(leaguesPageContentLeaguesResults, ['data'], [])
);

export const selectListMetadata = createSelector(
    [getLeaguesPageContentLeagues],
    (leaguesPageContentLeaguesResults) =>
        _get(leaguesPageContentLeaguesResults, ['metadata'], [])
);

export const selectListOptions = createSelector(
    [getLeaguesPageContentLeagues],
    (leaguesPageContentLeaguesResults) =>
        _get(leaguesPageContentLeaguesResults, ['options'], undefined)
);

export const selectListIsFetching = createSelector(
    [getLeaguesPageContentLeagues],
    (leaguesPageContentLeaguesResults) =>
        _get(leaguesPageContentLeaguesResults, ['isFetching'], false)
);
