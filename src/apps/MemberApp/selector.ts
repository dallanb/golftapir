import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getMemberApp = (state: any) => state.memberApp;

export const selectData = createSelector(
    [getMemberApp],
    (memberApp) => memberApp
);
