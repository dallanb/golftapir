import { createSelector } from 'reselect';
import {get as _get} from 'lodash';

const getBase = (state: any) => state.base;

export const selectMe = createSelector([getBase], (base) =>
    _get(base, ['me'], [])
);
