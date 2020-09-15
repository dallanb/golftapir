import { createSelector } from 'reselect';
import _ from 'lodash';

const getContestsCreatePage = (state: any) => state.contestsCreatePage;

export const selectData = createSelector([getContestsCreatePage], (contestsCreatePage) =>
    _.get(contestsCreatePage, ['data'], false)
);