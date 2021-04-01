import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getSpinner = (state: any) => state.spinner;

export const selectSpinnerData = createSelector(
    [getSpinner],
    (spinner) => spinner
);
