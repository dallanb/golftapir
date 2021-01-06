import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getMemberPage = (state: any) => state.membersPage.data;

export const selectData = createSelector(
    [getMemberPage],
    (membersPage) => membersPage
);
