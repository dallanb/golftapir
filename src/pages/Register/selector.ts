import { createSelector } from 'reselect';
import _ from 'lodash';

const getRegisterPage = (state: any) => state.registerPage;

export const selectData = createSelector([getRegisterPage], (registerPage) =>
    _.get(registerPage, ['data'], false)
);