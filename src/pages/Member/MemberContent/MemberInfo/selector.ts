import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getMemberPageContentMemberInfo = (state: any) =>
    state.memberPage.ui.content.memberInfo;

export const selectData = createSelector(
    [getMemberPageContentMemberInfo],
    (memberPageContentMemberInfo) => memberPageContentMemberInfo
);
export const selectIsInitialized = createSelector(
    [getMemberPageContentMemberInfo],
    (memberPageContentMemberInfo) =>
        _get(memberPageContentMemberInfo, ['isInitialized'], false)
);
