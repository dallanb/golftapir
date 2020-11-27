import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestsCreatePage = (state: any) => state.contestsCreatePage.data;

export const selectData = createSelector(
    [getContestsCreatePage],
    (contestsCreatePage) => contestsCreatePage
);
