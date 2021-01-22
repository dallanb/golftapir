import { get as _get } from 'lodash';
import { createSelector } from 'reselect';

const getMembersPageSiderContentInvites = (state: any) =>
    state.membersPage.ui.sider.content.memberActive.invites;

export const selectData = createSelector(
    [getMembersPageSiderContentInvites],
    (membersPageSiderContentInvites) => membersPageSiderContentInvites
);

export const selectListData = createSelector(
    [getMembersPageSiderContentInvites],
    (membersPageSiderContentInvites) =>
        _get(membersPageSiderContentInvites, ['data'], [])
);

export const selectListMetadata = createSelector(
    [getMembersPageSiderContentInvites],
    (membersPageSiderContentInvites) =>
        _get(membersPageSiderContentInvites, ['metadata'], [])
);

export const selectListOptions = createSelector(
    [getMembersPageSiderContentInvites],
    (membersPageSiderContentInvites) =>
        _get(membersPageSiderContentInvites, ['options'], undefined)
);

export const selectListIsFetching = createSelector(
    [getMembersPageSiderContentInvites],
    (membersPageSiderContentInvites) =>
        _get(membersPageSiderContentInvites, ['isFetching'], false)
);
