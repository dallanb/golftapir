import { createSelector } from 'reselect';

const getMemberSettingsPageContentMember = (state: any) =>
    state.memberSettingsPage.ui.content.member;

export const selectData = createSelector(
    [getMemberSettingsPageContentMember],
    (memberSettingsPageContentMember) => memberSettingsPageContentMember
);
