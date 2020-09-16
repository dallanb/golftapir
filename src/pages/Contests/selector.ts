import { createSelector } from 'reselect';
import _ from 'lodash';

const getContestsPage = (state: any) => state.contestsPage;

export const selectData = createSelector([getContestsPage], (contestsPage) =>
    _.get(contestsPage, ['data'], false)
);
