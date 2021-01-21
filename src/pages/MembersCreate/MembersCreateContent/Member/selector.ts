import { createSelector } from 'reselect';

const getMembersCreatePageContentMember = (state: any) =>
    state.membersCreatePage.ui.content.member;

export const selectData = createSelector(
    [getMembersCreatePageContentMember],
    (membersCreatePageContentMember) => membersCreatePageContentMember
);
