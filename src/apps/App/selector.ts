import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getApp = (state: any) => state;

export const selectApp = createSelector([getApp], (app) => app);
