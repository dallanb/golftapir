import { createSelector } from 'reselect';
import _ from 'lodash';

const getContestPage = (state: any) => state.contestPage;

export const selectData = createSelector([getContestPage], (contestPage) =>
    _.get(contestPage, ['data'], false)
);
