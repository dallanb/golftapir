import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLeagueMembersPageContentMembers = (state: any) =>
    state.leagueMembersPage.ui.content.members;

export const selectData = createSelector(
    [getLeagueMembersPageContentMembers],
    (leagueMembersPageContentMembers) => leagueMembersPageContentMembers
);

export const selectListData = createSelector(
    [getLeagueMembersPageContentMembers],
    (leagueMembersPageContentMembers) =>
        _get(leagueMembersPageContentMembers, ['data'], [])
);

export const selectListMetadata = createSelector(
    [getLeagueMembersPageContentMembers],
    (leagueMembersPageContentMembers) =>
        _get(leagueMembersPageContentMembers, ['metadata'], [])
);

export const selectListIsFetching = createSelector(
    [getLeagueMembersPageContentMembers],
    (leagueMembersPageContentMembers) =>
        _get(leagueMembersPageContentMembers, ['isFetching'], false)
);
