import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getWagersPage = (state: any) => state.wagersPage;

export const selectData = createSelector([getWagersPage], (wagersPage) =>
    _get(wagersPage, ['data'], false)
);
