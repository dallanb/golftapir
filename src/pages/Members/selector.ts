import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getMembersPage = (state: any) => state.membersPage.data;

export const selectData = createSelector(
    [getMembersPage],
    (membersPage) => membersPage
);
