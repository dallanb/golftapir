import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getLeagueMembersPage = (state: any) => state.leagueMembersPage.data;

export const selectData = createSelector(
    [getLeagueMembersPage],
    (leagueMembersPage) => leagueMembersPage
);
