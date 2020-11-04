import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getModal = (state: any) => state.modal;

export const selectModalData = createSelector([getModal], (modal) => modal);
