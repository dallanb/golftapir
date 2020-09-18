import { createSelector } from 'reselect';
import _ from 'lodash';

const getBase = (state: any) => state.base;

export const selectMe = createSelector([getBase], (base) =>
    _.get(base, ['me'], [])
);
