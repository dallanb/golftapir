import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getMemberSettingsPage = (state: any) => state.memberSettingsPage.data;

export const selectData = createSelector(
    [getMemberSettingsPage],
    (memberSettingsPage) => memberSettingsPage
);

export const selectIsInitialized = createSelector(
    [getMemberSettingsPage],
    (memberSettingsPage) => _get(memberSettingsPage, ['isInitialized'], false)
);

export const selectMember = createSelector(
    [getMemberSettingsPage],
    (memberSettingsPage) => _get(memberSettingsPage, ['member'], undefined)
);
