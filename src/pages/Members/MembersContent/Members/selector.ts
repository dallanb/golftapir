import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getMembersPageContentMembers = (state: any) =>
    state.membersPage.ui.content.members;

export const selectData = createSelector(
    [getMembersPageContentMembers],
    (membersPageContentMembers) => membersPageContentMembers
);

export const selectListData = createSelector(
    [getMembersPageContentMembers],
    (membersPageContentMembers) => _get(membersPageContentMembers, ['data'], [])
);

export const selectListMetadata = createSelector(
    [getMembersPageContentMembers],
    (membersPageContentMembers) =>
        _get(membersPageContentMembers, ['metadata'], [])
);

export const selectListIsFetching = createSelector(
    [getMembersPageContentMembers],
    (membersPageContentMembers) =>
        _get(membersPageContentMembers, ['isFetching'], false)
);
