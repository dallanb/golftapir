import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getMemberPageContentMemberResults = (state: any) =>
    state.memberPage.ui.content.memberResults;

export const selectData = createSelector(
    [getMemberPageContentMemberResults],
    (memberPageContentMemberResults) =>
        memberPageContentMemberResults
);

export const selectListData = createSelector(
    [getMemberPageContentMemberResults],
    (memberPageContentMemberResults) =>
        _get(memberPageContentMemberResults, ['data'], [])
);

export const selectListMetadata = createSelector(
    [getMemberPageContentMemberResults],
    (memberPageContentMemberResults) =>
        _get(memberPageContentMemberResults, ['metadata'], [])
);

export const selectListIsFetching = createSelector(
    [getMemberPageContentMemberResults],
    (memberPageContentMemberResults) =>
        _get(memberPageContentMemberResults, ['isFetching'], false)
);
