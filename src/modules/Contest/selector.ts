import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestModule = (state: any) => state.contestModule;

export const selectData = createSelector(
    [getContestModule],
    contestModule => contestModule
);

export const selectIsInitialized = createSelector(
    [getContestModule],
    contestModule => _get(contestModule, ['isInitialized'], false)
);

export const selectIsTerminating = createSelector(
    [getContestModule],
    contestModule => _get(contestModule, ['isTerminating'], false)
);
