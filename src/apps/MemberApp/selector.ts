import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getMemberApp = (state: any) => state.app;

export const selectData = createSelector(
    [getMemberApp],
    (memberApp) => memberApp
);

export const selectIsInitialized = createSelector([getMemberApp], (memberApp) =>
    _get(memberApp, ['isInitialized'], false)
);
