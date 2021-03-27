import { get as _get } from 'lodash';
import { createSelector } from 'reselect';

const getMembersPageSiderInvites = (state: any) =>
    state.membersPage.ui.sider.memberActive.invites;

export const selectData = createSelector(
    [getMembersPageSiderInvites],
    (membersPageSiderInvites) => membersPageSiderInvites
);

export const selectListData = createSelector(
    [getMembersPageSiderInvites],
    (membersPageSiderInvites) => _get(membersPageSiderInvites, ['data'], [])
);

export const selectListMetadata = createSelector(
    [getMembersPageSiderInvites],
    (membersPageSiderInvites) => _get(membersPageSiderInvites, ['metadata'], [])
);

export const selectListOptions = createSelector(
    [getMembersPageSiderInvites],
    (membersPageSiderInvites) =>
        _get(membersPageSiderInvites, ['options'], undefined)
);

export const selectListIsFetching = createSelector(
    [getMembersPageSiderInvites],
    (membersPageSiderInvites) =>
        _get(membersPageSiderInvites, ['isFetching'], false)
);
