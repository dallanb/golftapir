import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLeagueHomePageContentMemberStandings = (state: any) =>
    state.leagueHomePage.ui.content.memberStandings;

export const selectIsInitialized = createSelector(
    [getLeagueHomePageContentMemberStandings],
    (memberStandings) => _get(memberStandings, ['isInitialized'], false)
);
export const selectIsRefreshing = createSelector(
    [getLeagueHomePageContentMemberStandings],
    (memberStandings) => _get(memberStandings, ['isRefreshing'], false)
);

export const selectMembers = createSelector(
    [getLeagueHomePageContentMemberStandings],
    (memberStandings) => _get(memberStandings, ['members'], false)
);
