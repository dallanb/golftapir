import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getMembersCreatePage = (state: any) => state.membersCreatePage.data;

export const selectData = createSelector(
    [getMembersCreatePage],
    (membersCreatePage) => membersCreatePage
);
