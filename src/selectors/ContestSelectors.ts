import { createSelector } from 'reselect';
import _ from 'lodash';

const getContest = (state: any) => state.contest;

export const selectData = createSelector([getContest], (contest) =>
    _.get(contest, ['data'], false)
);
