import { createSelector } from 'reselect';
import {get as _get} from 'lodash';

const getRegisterPage = (state: any) => state.registerPage;

export const selectData = createSelector([getRegisterPage], (registerPage) =>
    _get(registerPage, ['data'], false)
);