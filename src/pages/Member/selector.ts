import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getMemberPage = (state: any) => state.memberPage.data;

export const selectData = createSelector(
    [getMemberPage],
    (memberPage) => memberPage
);

export const selectMember = createSelector([getMemberPage], (memberPage) =>
    _get(memberPage, ['member'], undefined)
);
