import { createSelector } from 'reselect';
import {get as _get} from 'lodash';

const getContest = (state: any) => state.contest;

export const selectData = createSelector([getContest], (contest) =>
    _get(contest, ['data'], false)
);
