import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getMemberSettingsPageContentMember = (state: any) =>
    state.memberSettingsPage.ui.content.member;

export const selectData = createSelector(
    [getMemberSettingsPageContentMember],
    (memberSettingsPageContentMember) => memberSettingsPageContentMember
);

export const selectIsInitialized = createSelector(
    [getMemberSettingsPageContentMember],
    (memberSettingsPageContentMember) =>
        _get(memberSettingsPageContentMember, ['isInitialized'], false)
);
