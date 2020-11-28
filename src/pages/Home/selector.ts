import { createSelector } from 'reselect';

const getHomePage = (state: any) => state.homePage.data;

export const selectData = createSelector([getHomePage], (homePage) => homePage);
